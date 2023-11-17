<script>
  import { queryResults } from './store'
</script>

<div class="results-container">
  {#if !Object.keys($queryResults).length}
    <h2 class="empty-callout">Execute a query to see the results</h2>
  {:else}
    <h2>Hello</h2>
  {/if}
</div>

<style>
  .empty-callout {
    color: #00000061;
  }

  .results-container {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 340px;
  }
</style>