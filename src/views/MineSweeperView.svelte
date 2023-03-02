<script>
    import { onMount } from "svelte";
    import { blur, scale } from "svelte/transition";
    import { fieldSize } from "../stores/mineSweeper";
    import Mine from '../assets/mine.png';

    let field = [];
    const mineImg = Mine;
    let isGameOver = false;
    $: isGameWon = field.every(row => row.filter(cell => cell.text != 'x').every(cell => cell.visible));
    
    onMount(() => {
        generateField();
    })

    const generateField = () => {
        field = [];
        isGameOver = false;

        for (let row of range(0, $fieldSize)) {
            field.push([])
            for (let col of range(0, $fieldSize)) {
                let cell = { text: null, visible: false };
                
                if (Math.round(Math.random() * 9) == 5) {
                    cell.text = 'x';
                }
                
                field[row].push(cell);
                field = field;
            }
        }

        for (let row of range(0, $fieldSize)) {
            for (let col of range(0, $fieldSize)) {
                countAdjacentMines(row, col);
            }
        }
    }

    const countAdjacentMines = (row, col) => {
        const cell = field[row][col];

        if (cell.text == 'x')
            return;

        let count = 0;
        for (let i of range(-1, 2)) {
            for (let j of range(-1, 2)) {
                if (field[row+i]?.[col+j] == undefined)
                    continue;

                if (field[row+i][col+j].text == 'x') {
                    count++;
                }
            }
        }

        if (count == 0) {
            return;
        }

        cell.text = count;
        field = field;
    }

    const revealCell = (cell, row, col) => {
        if (isGameOver || isGameWon || cell.marked || cell.visible)
            return;

        cell.visible = true;
        field = field;

        if (cell.text == null) {
            for (let i of range(-1, 2)) {
                for (let j of range(-1, 2)) {
                    if ([-1, $fieldSize].includes(row+i) || [-1, $fieldSize].includes(col+j))
                        continue;
                    
                    const adjacentCell = field[row+i][col+j];

                    if (adjacentCell.text == 'x')
                        continue;
                    
                    adjacentCell.visible = true;
                }
            }
        }

        if (cell.text == 'x') {
            cell.exploded = true;
            isGameOver = true;

            for (let i of range(0, $fieldSize)) {
                for (let j of range(0, $fieldSize)) {
                    const mineToShow = field[i][j];

                    if (mineToShow.text == 'x')
                        mineToShow.visible = true;
                }
            }
            field = field;
        }
    }

    const markCell = (cell) => {
        if (isGameOver || isGameWon)
            return;

        cell.marked = !cell.marked;        
        field = field;
    }

    const range = (start, stop) => Array(stop - start).fill(start).map((x, y) => x + y);
</script>

<div class:shake={isGameOver} in:scale={{delay: 0, duration: 300}}>
    <h1 class="text-center">
        Mine Sweeper
    </h1>

    {#if isGameOver}
        <div transition:scale>
            <h3 class="my-3 text-center text-danger">
                Game over!
            </h3>
    
            <button class="btn btn-success d-block w-25 mx-auto" on:click={generateField}>
                Play gain
            </button>
        </div>
    {:else if isGameWon}
        <h3 transition:blur class="my-3 text-center text-success">
            You win!
        </h3>
    {/if}
    
    <table class="mx-auto my-3">
        <tbody>
            {#each field as row, rowId (rowId)}
                <tr>
                    {#each row as col, colId (colId)}
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <td
                            class="text-center"
                            class:visible={col.visible}
                            class:bg-danger={col.text == 'x' && col.visible}
                            class:exploded={col.exploded}
                            class:bg-warning={col.marked}
                            on:click={_ => revealCell(col, rowId, colId)}
                            on:contextmenu|preventDefault={_ => markCell(col)}
                        >
                            {#if col.visible}
                                <span transition:blur={{delay: 0, duration: 300}}>
                                    {#if col.text == 'x'}
                                        <img class="m-auto" src={mineImg} alt="mine">
                                    {:else if col.text}
                                        <p class="text-center m-auto">{col.text}</p>
                                    {/if}
                                </span>
                            {/if}
                        </td>
                    {/each}
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    td, tr {
        border: 1px solid #505050;
    }

    img {
        width: 20px;
    }

    td {
        width: 30px;
        height: 30px;
    }

    .visible {
        background-color: #707070;
    }

    .exploded {
        background-color: darkred !important;
    }

    .shake {
        animation: anim-shake 0.5s;
    }

    @keyframes anim-shake {
        0% { transform: translate(1px, 1px) rotate(0deg); }
        10% { transform: translate(-1px, -2px) rotate(-1deg); }
        20% { transform: translate(-3px, 0px) rotate(1deg); }
        30% { transform: translate(3px, 2px) rotate(0deg); }
        40% { transform: translate(1px, -1px) rotate(1deg); }
        50% { transform: translate(-1px, 2px) rotate(-1deg); }
        60% { transform: translate(-3px, 1px) rotate(0deg); }
        70% { transform: translate(3px, 1px) rotate(-1deg); }
        80% { transform: translate(-1px, -1px) rotate(1deg); }
        90% { transform: translate(1px, 2px) rotate(0deg); }
        100% { transform: translate(1px, -2px) rotate(-1deg); }
    }
</style>