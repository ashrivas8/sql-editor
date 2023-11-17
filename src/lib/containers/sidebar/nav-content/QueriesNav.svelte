<script>
  import Accordion from "../../../components/Accordion.svelte";
  import ExistingQueries from "./ExistingQueries.svelte";
  import RecentQueries from "./RecentQueries.svelte";

  const sectionsList = [
    {
      label: 'Existing',
      name: 'existing', // pre-defined
      component: ExistingQueries,
    },
    {
      label: 'Recent',
      name: 'recent',
      component: RecentQueries,
    }
  ];
</script>

<div class="nav-container">
  <h3>Queries</h3>
  <div class="queries-container">
    {#each sectionsList as section, idx (section.name)}
      <Accordion open={section.name === 'existing'}>
        <span slot="heading">{section.label}</span>
        <div slot="expanded">
          <svelte:component this={section.component} />
        </div>
      </Accordion>
    {/each}
  </div>
</div>

<style>
  .queries-container {
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