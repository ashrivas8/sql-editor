<script>
  import Accordion from "../../../components/Accordion.svelte";
  import { getTableInfo } from "./helpers";

  const tablesList = ['customers', 'products'];

</script>

<div class="nav-container">
  <h3>Tables description</h3>
  <div class="tables-container">
    {#each tablesList as tableName, idx (idx)}
      <Accordion open>
        <span slot="heading">{tableName}</span>
        <div slot="expanded">
          {#each getTableInfo(tableName) as col, idx (col)}
            <span>{col}</span>
          {/each}
        </div>
      </Accordion>
    {/each}
  </div>
</div>

<style>
  .tables-container {
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex-basis: 650px;
    overflow-y: auto;
  }

  div[slot="expanded"] {
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
</style>