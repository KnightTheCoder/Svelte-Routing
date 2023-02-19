<script>
    import { currentRoute } from './stores/routing';
    import RouterView from './lib/RouterView.svelte';
    import Navigation from './lib/Navigation.svelte';
</script>

<main>
    <header>
        <Navigation />
    </header>

    <div class="container">
        {#if !$currentRoute?.component}
            <h1 class="text-center">Choose a page</h1>
        {:else}
            <RouterView />
        {/if}
    </div>
</main>
