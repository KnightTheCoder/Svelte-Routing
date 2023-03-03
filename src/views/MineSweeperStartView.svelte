<script>
    import RouterLink from "@/lib/components/RouterLink.svelte";
    import { fieldSize } from "@/lib/stores/mineSweeper";

    let sizes = [10, 15, 20, 25, 30];
</script>

<h1 class="text-center">
    Mine Sweeper
</h1>

<p class="text-center">
    Choose a size for the field
</p>

<select class="form-select bg-dark text-white w-25 mx-auto" bind:value={$fieldSize}>
    {#each sizes as size}
        <option value={size}>{size}</option>
    {/each}
</select>

<RouterLink to="/mine-game" class={'m-2 btn btn-success rounded d-block w-25 mx-auto'}>
    Start Game
</RouterLink>