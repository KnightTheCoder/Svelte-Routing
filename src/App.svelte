<script>
    import RouterView from './lib/RouterView.svelte';
    import Navigation from './lib/Navigation.svelte';
</script>

<main>
    <header>
        <Navigation />
    </header>

    <div class="container my-4">
        <RouterView />
    </div>
</main>
