<script>
  export let handleClick = () => {};
  export let selected = false;
</script>

<div class="side-nav__cell" class:selected on:click={handleClick} on:keyup={handleClick} role="button">
  <slot name="icon" />
  <slot name="name" />
</div>

<style>
  .side-nav__cell {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    height: 56px;
    cursor: pointer;
  }

  .side-nav__cell:not(:last-child) {
    margin-bottom: 8px;
  }

  .selected {
    background-color: #f5f5f5;
  }
</style>