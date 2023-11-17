<script>
  import { queryText } from "../containers/content/store";

  export let queryStr;

  function handleClick() {
    $queryText = queryStr;
  }
</script>

<button on:click={handleClick}>{queryStr}</button>

<style>
  button {
    padding: 4px 8px;
    border-radius: 4px;
    background-color: #0341d8de;
    color: white;
    border-color: #646cff;
  }
</style>