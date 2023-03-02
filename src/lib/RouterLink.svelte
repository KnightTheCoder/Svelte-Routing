<script>
    /* Provides a navigation link for a given route */
    import { currentPath } from '../stores/routing';

    export let to = '/';
    export let isNavigation = false;

    const setPath = () => {
        window.location.hash = to.replace(/^\//, '');
        $currentPath = to;
    };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<span
    class="mx-2 p-2 bg-dark rounded"
    class:navigation={isNavigation}
    on:click={setPath}
>
    <slot />
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