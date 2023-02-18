<script>
    import RouterLink from "./routing/RouterLink.svelte";
    import CounterView from "../views/CounterView.svelte";
    import StopperView from "../views/StopperView.svelte";
</script>

<nav class="text-center">
    <RouterLink view={{name: 'home', component: null}} />
    <RouterLink view={{name: 'counter', component: CounterView}} />
    <RouterLink view={{name: 'stopper', component: StopperView}} />
</nav>

<style>
    nav {
        padding: 1em;
        background-color: #050505;
    }
</style>