<script>
  export let columns = [];
  export let rows = [];
  export let rowsInPage = 20;

  let numPages = Math.ceil(rows.length / rowsInPage);
  let activePage = 1;
  let pagesArray = Array.from({ length: numPages }, (_, idx) => idx + 1);
  
  $: rowsToShow = rows.slice(rowsInPage * (activePage - 1), activePage * rowsInPage);

  function handlePageNext() {
    if (activePage === numPages) return;

    activePage++;
  }

  function handlePagePrev() {
    if (activePage === 1) return;

    activePage--;
  }

  $: rows, rowsInPage, numPages = Math.ceil(rows.length / rowsInPage);

  $: numPages, pagesArray = Array.from({ length: numPages }, (_, idx) => idx + 1);
    
</script>

{#if columns.length}
  <table>
    <thead>
      <tr>
        {#each columns as col, idx (col)}
          <td>{col}</td>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each rowsToShow as row, idx (idx)}
        <tr>
          {#each row as cell}
            <td>
              {cell}
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>

  <nav aria-label="pagination">
    <ul class="pagination">
      <li class:disabled={activePage===numPages}>
        <button on:click={handlePagePrev}>«</button></li>
      {#each pagesArray as pageNum}
        <li>
          <button class:active={activePage === pageNum} on:click={() => activePage = +pageNum}>{pageNum}</button>
        </li>
      {/each}
      <li class:disabled={activePage===1}>
        <button on:click={handlePageNext}>»</button></li>
    </ul>
  </nav>
{/if}

<style>
  nav {
  display: flex;
  justify-content: center;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pagination {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  .pagination li {
    margin: 0 1px;
  }

  button {
    background: transparent;
    outline: none;
  }

  button.active {
    font-weight: 600;
  }
</style>
