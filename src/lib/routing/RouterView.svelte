<script>
    import { currentRoute } from ".";
</script>


{#if $currentRoute}
    <svelte:component this={$currentRoute.component} />
{/if}