<script>
  import Editor from "../../components/Editor.svelte";
  import playIcon from "../../../assets/play.svg";

  import { queryText, queryResults } from "./store";
  import { getQueryResults } from "./helpers";
  import ResultsView from "./ResultsView.svelte";
  import { updateRecentQueries } from "../sidebar/store";

  function handleExecute() {
    if (!$queryText) {
      window.alert('Please enter a query');
      return;
    }
    updateRecentQueries($queryText);
    $queryResults = getQueryResults();
  }
</script>

<div class="query-text-actions">
  <h1>Run SQL Query</h1>
  <div class="exe-continer">
    <button type="button" id="execute-btn" on:click={handleExecute}>
      <img src={playIcon} width="28" height="28" alt="execute-query" />
    </button>
    <span>(Cmd + Enter to execute)</span>
  </div>
</div>
<Editor on:execute={handleExecute} />
<ResultsView />


<style>
  .query-text-actions {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    align-items: center;
    height: auto;
  }

  #execute-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0341d8de;
    padding: 6px 28px;
    border-color: #646cff;
  }

  #execute-btn:hover {
    background-color: #042c8dde;
  }

  .exe-continer {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .exe-continer span {
    font-size: 10px;
    color: #0000006e;
  }

  h1 {
    margin: 0;
  }
</style>
