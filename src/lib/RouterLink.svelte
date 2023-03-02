<script>
    /* Provides a navigation link for a given route */
    import { currentPath, currentRoute, getRouteFromPath } from '../stores/routing';

    export let to = '/';

    const setPath = () => {
        window.location.hash = to.replace(/^\//, '');
        $currentPath = to;
    };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<span
    class="mx-2"
    on:click={setPath}
>
    <slot />
</span>

<style>
    span {
        cursor: pointer;
    }
</style>
