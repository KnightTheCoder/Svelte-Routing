<script>
    /* Provides a navigation link for a given route */
    import { currentRoute, getRouteFromPath, routes } from '.'

    export let to = '/'

    const setPath = () => {
        $currentRoute = getRouteFromPath(to);
    }

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<span class="mx-2" on:click={setPath}>
    <slot></slot>
</span>

<style>
    span {
        cursor: pointer;
    }
</style>