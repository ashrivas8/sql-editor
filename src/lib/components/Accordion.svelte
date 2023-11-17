<script>
  import { slide } from "svelte/transition";

  export let open = false;
  const handleClick = () => open = !open;
</script>

<div class="accordion">
  <div class="header">
    <slot name="heading"></slot>
    <button on:click={handleClick}>
      {#if open}
        -
      {:else}
        +
      {/if}
    </button>
  </div>

  {#if open}
    <div class="accordion-expanded" transition:slide|local>
      <slot name="expanded"></slot>
    </div>
  {/if}
</div>

<style>
  .accordion {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  .header {
    border-radius: 4px;
    background-color: #9dacc39c;
    width: 100%;
    padding: 0 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    background: transparent;
    padding: 8px 12px;
    outline: none;
  }
</style>
