<script>
    import RouterView from './lib/RouterView.svelte';
    import Navigation from './lib/Navigation.svelte';
    import { currentRoute } from './stores/routing';

    currentRoute.subscribe(() => {
        if (!$currentRoute)
            return;

        document.title = $currentRoute.name
            .charAt(0)
            .toUpperCase()
            + $currentRoute.name
                .slice(1)
                .replace('-', ' ')
                + ' - Svelte Custom Router';
    });
</script>

<main>
    <header>
        <Navigation />
    </header>

    <div class="container my-4">
        <RouterView />
    </div>
</main>
