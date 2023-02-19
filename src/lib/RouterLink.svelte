<script>
    /* Provides a navigation link for a given route */
    import { currentRoute, getRouteFromPath } from '../stores/routing';

    export let to = '/';

    const setPath = () => {
        $currentRoute = getRouteFromPath(to);
        window.location.hash = to.replace(/^\//, '');
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
