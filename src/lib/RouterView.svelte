<script>
    import { currentRoute } from '../stores/routing';
</script>

{#if $currentRoute}
    <svelte:component this={$currentRoute.component} />
{/if}
