<script>
    import { onMount } from "svelte";
    import { fieldSize } from "../stores/mineSweeper";
    import Mine from '../assets/mine.png';

    let field = [];
    const mineImg = Mine;
    let isGameOver = false;
    
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
                    cell.text = 'x'
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
        if (isGameOver)
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

    const range = (start, stop) => Array(stop - start).fill(start).map((x, y) => x + y);
</script>

<h1 class="text-center">
    Mine Sweeper
</h1>

{#if isGameOver}
    <div class="my-3">
        <h3 class="text-center">
            Game over!
        </h3>
        <button class="btn btn-success d-block w-25 mx-auto" on:click={generateField}>
            Play gain
        </button>
    </div>
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
                        on:click={() => revealCell(col, rowId, colId)}
                    >
                        {#if col.visible}
                            {#if col.text == 'x'}
                                <img class="m-auto" src={mineImg} alt="mine">
                            {:else if col.text}
                                <p class="text-center m-auto">{col.text}</p>
                            {/if}
                        {/if}
                    </td>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>

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
</style>