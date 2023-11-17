<script>
  import Table from '../../components/Table.svelte';
  import { queryResults } from './store'
  import fullScreenIcon from '../../../assets/fullscreen.svg';
  import exportIcon from '../../../assets/export.svg';

  function downloadCsv() {
    const colArr = $queryResults.columns;
    const rowsArr = $queryResults.data;
    let csvContent = '';

    csvContent += colArr.join(',') + '\n';

    for (const row of rowsArr) {
      const sanitizedValues = row.map(value =>
        typeof value === 'string' && value.includes(',')
          ? `"${value.replace(/"/g, '""')}"`
          : value
      );
      csvContent += sanitizedValues.join(',') + '\n';
    }

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.download = 'data.csv';

    document.body.appendChild(downloadLink);
    downloadLink.click();

    document.body.removeChild(downloadLink);
  }
</script>

<div class="results-container">
  {#if !Object.keys($queryResults).length}
    <h2 class="empty-callout">Execute a query to see the results</h2>
  {:else}
    <div class="table-header">
      <span>{Object.values($queryResults)[1].length} rows</span>
      <div class="header-actions">
        <button on:click={downloadCsv} class="flex-center">
          <img src={exportIcon} alt="export" width="20" height="20">
          Export
        </button>
        <button class="flex-center">
          <img src={fullScreenIcon} alt="export" width="20" height="20">
          Fullscreen
        </button>
      </div>
    </div>
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
    overflow: hidden;
  }

  .table-container {
    overflow-y: auto;
  }

  .table-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    background-color: #9dacc39c;
    padding: 12px 14px;
    margin-bottom: 4px;
  }

  .header-actions {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  button {
    background: transparent;
    padding: 4px 8px;
    gap: 4px;
    outline: none;
  }

  button:hover {
    opacity: 0.6;
  }
</style>