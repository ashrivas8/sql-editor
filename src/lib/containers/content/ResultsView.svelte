<script>
  import Table from '../../components/Table.svelte';
  import { queryResults } from './store'

  $: console.log($queryResults);

  // function renderCell(cellData) {
  //   return (
      
  //   )
  // }
</script>

<div class="results-container">
  {#if !Object.keys($queryResults).length}
    <h2 class="empty-callout">Execute a query to see the results</h2>
  {:else}
    <div class="table-container">
      <Table
        columns={$queryResults.columns}
        rows={$queryResults.data}
      />
    </div>
  {/if}
</div>

<style>
  .empty-callout {
    color: #00000061;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
  }

  .results-container {
    height: 400px;
    margin-top: 6px;
    display: flex;
    flex-direction: column;
    border: 1px solid #dedede;
    padding: 8px 8px 0;
    border-radius: 4px;
  }

  .table-container {
    overflow-y: auto;
  }
</style>