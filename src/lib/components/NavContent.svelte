<script>
  export let componentFunc;
</script>

{#if componentFunc}
  <!-- svelte-ignore empty-block -->
  <!-- {#await componentFunc()} -->
    <!-- todo: loader? -->
  <!-- {:then component} -->
    <svelte:component this={componentFunc} />
  <!-- {/await} -->
{/if}