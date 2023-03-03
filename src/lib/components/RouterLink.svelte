<script>
    /* Provides a navigation link for a given route */
    import { currentPath, getRouteFromPath } from '@/lib/stores/routing';

    export let to = '/';
    export let isNavigation = false;
    let classes = 'mx-2 p-2 bg-dark rounded';
    export {classes as class}

    const setPath = () => {
        window.location.hash = to.replace(/^\//, '');
        $currentPath = to;
    };

    let defaultName = getRouteFromPath(to).name.charAt(0).toUpperCase() + getRouteFromPath(to).name.slice(1).replace('-', ' ');
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<span
    class={`${classes}`}
    class:navigation={isNavigation}
    on:click={setPath}
>
    <slot>
        {defaultName}
    </slot>
</span>

<style>
    span {
        cursor: pointer;
    }

    .navigation:hover {
        background-color: #707070 !important;
        box-shadow: #a0a0a0 1px 1px 2px 4px;
    }
</style>