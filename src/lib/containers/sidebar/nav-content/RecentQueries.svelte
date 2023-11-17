<script>
  import QueryBtn from "../../../components/QueryBtn.svelte";
import { recentQueries } from "../store";
</script>

{#if !$recentQueries.length}
  <span class="empty-text">No queries to show</span>
{:else}
  {#each $recentQueries as query}
    <QueryBtn queryStr={query} />
  {/each}
{/if}

<style>
  .empty-text {
    color: #0000007a;
  }
</style>
