<script>
    import { currentRoute, routes } from '.'

    export let view = { name: '', component: null }
    routes.update(existing => {
        existing.push(view);
        return existing;
    });

    const setView = () => {
        $currentRoute = view
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<span class="mx-2" on:click={setView}>{view.name}</span>

<style>
    span {
        cursor: pointer;
    }
</style>