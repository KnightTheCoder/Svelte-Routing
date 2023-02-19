<script>
    import RouterLink from "./RouterLink.svelte";
</script>

<nav class="text-center">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/counter">Counter</RouterLink>
    <RouterLink to="/stopper">Stopper</RouterLink>
    <RouterLink to="/calculator">Calculator</RouterLink>
</nav>

<style>
    nav {
        padding: 1em;
        background-color: #050505;
    }
</style>