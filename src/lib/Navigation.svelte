<script>
    import RouterLink from "./routing/RouterLink.svelte";
    import Counter from "./Counter.svelte";
    import Stopper from "./Stopper.svelte";
    import { routes } from "./routing";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<nav class="text-center">
    <RouterLink view={{name: 'home', component: null}} />
    <RouterLink view={{name: 'counter', component: Counter}} />
    <RouterLink view={{name: 'stopper', component: Stopper}} />
</nav>

<style>
    nav {
        padding: 1em;
        background-color: #050505;
    }
</style>