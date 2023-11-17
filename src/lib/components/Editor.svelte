<script>
  import { createEventDispatcher, tick } from "svelte";
  import CodeMirror from "svelte-codemirror-editor";
  import { sql } from "@codemirror/lang-sql";
  import { queryText } from "../containers/content/store";

  const dispatch = createEventDispatcher();

  tick().then(() => {
    const contentDiv = document.querySelector('.cm-content');

    contentDiv?.addEventListener('keydown', (event) => {
      if ((event.metaKey || event.ctrlKey) && event.keyCode === 13) {
        // handle cmd/ctrl + Enter
        dispatch('execute');
        event.stopImmediatePropagation();
      }
    })
  })
</script>

<!-- on:change={(e) => $queryText = e.detail} -->
<CodeMirror
  bind:value={$queryText}
  lang={sql({
    upperCaseKeywords: true,
    schema: {
      products: [],
      customers: [],
    },
  })}
  styles={{
    "&": {
      "height": "320px",
      "font-size": "16px",
    },
  }}
/>

<style>
  :global(.codemirror-wrapper) {
    border-radius: 4px;
    border: 1px solid #d7bebe;
    height: 320px;
  }
</style>