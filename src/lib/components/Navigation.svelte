<script>
    import RouterLink from '@/lib/components/RouterLink.svelte';
</script>

<nav class="text-center">
    <RouterLink to="/" isNavigation>Home</RouterLink>
    <RouterLink to="/counter" isNavigation>Counter</RouterLink>
    <RouterLink to="/stopwatch" isNavigation>Stop watch</RouterLink>
    <RouterLink to="/calculator" isNavigation>Calculator</RouterLink>
    <RouterLink to="/mine-start" isNavigation>Mine sweeper</RouterLink>
</nav>

<style>
    nav {
        padding: 1em;
        background-color: #050505;
    }
</style>
