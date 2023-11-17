<script>
  export let columns = [];
  export let rows = [];
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
      {#each rows as row, idx (idx)}
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

  <!-- <nav aria-label="pagination">
    <ul class="pagination">
      <li><a href=""><span aria-hidden="true">«</span></a></li>
      <li><a href=""><span class="visuallyhidden">page </span>1</a></li>
      <li><a href="" aria-current="page"><span class="visuallyhidden">page </span>2</a></li>
      <li><a href=""><span class="visuallyhidden">page </span>3</a></li>
      <li><a href=""><span class="visuallyhidden">page </span>4</a></li>
      <li><a href=""><span aria-hidden="true">»</span></a></li>
    </ul>
  </nav> -->
{/if}

<style>
  nav {
  display: flex;
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
</style>
