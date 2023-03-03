<script>
    import RouterView from '@/lib/components/RouterView.svelte';
    import Navigation from '@/lib/components/Navigation.svelte';
    import { currentRoute } from '@/lib/stores/routing';
    import { title } from '@/lib/stores/title';

    currentRoute.subscribe(value => {
        if (!value)
            return;

        $title = value.name
            .charAt(0)
            .toUpperCase()
            + value.name
                .slice(1)
                .replace('-', ' ');
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
