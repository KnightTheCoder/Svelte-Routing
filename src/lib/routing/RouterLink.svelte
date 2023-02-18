<script>
    /* Provides a navigation link for a given route */
    import { currentRoute, routes } from '.'

    export let view = { name: '', component: null }
    routes.update(existing => {
        // Only add new route if it doesn't already exist
        if (existing.every(it => 
            it.name != view.name && it.component != view.component
        )) {
            existing.push(view);
        }

        return existing;
    });

    const setView = () => {
        $currentRoute = view
    }

    const toTitle = text => {
        return text.charAt(0).toUpperCase() + text.slice(1)
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<span class="mx-2" on:click={setView}>{toTitle(view.name)}</span>

<style>
    span {
        cursor: pointer;
    }
</style>