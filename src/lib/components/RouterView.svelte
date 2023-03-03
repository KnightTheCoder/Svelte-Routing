<script>
    import { currentRoute } from '@/lib/stores/routing';
</script>

{#if $currentRoute}
    <svelte:component this={$currentRoute.component} />
{/if}
