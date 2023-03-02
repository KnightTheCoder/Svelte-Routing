<script>
    import { onMount } from "svelte";
    import { fieldSize } from "../stores/mineSweeper";
    import Mine from '../assets/mine.png';

    let field = [];
    const mineImg = Mine;
    
    for (let i = 0; i < $fieldSize; i++) {
        field.push([]);
    }
    
    onMount(() => {
        for (let i = 0; i < $fieldSize; i++) {
            for (let j = 0; j < $fieldSize; j++) {
                if (Math.round(Math.random() * 9) == 5) {
                    field[i][j] = 'x';
                } else {
                    field[i][j] = null;
                }
            }
        }
    })

    const identify = (text) => {
        console.log(text == 'x' ? 'mine' : 'empty');
    }
</script>

<h1 class="text-center">
    Mine Sweeper
</h1>

<table class="w-25 mx-auto my-3">
    <tbody>
        {#each field as row}
            <tr>
                {#each row as col}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <td class="text-center" on:click={() => identify(col)}>
                        {#if col == 'x'}
                            <img src={mineImg} alt="mine">
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
        width: 25px;
        height: 25px;
    }
</style>