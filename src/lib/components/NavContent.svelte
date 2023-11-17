<script>
  export let component;
</script>

{#if component}
  <svelte:component this={component} />
{/if}