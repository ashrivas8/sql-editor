<script>
  import ContentSection from "./lib/containers/content/ContentSection.svelte";
  import Sidebar from "./lib/containers/sidebar/Sidebar.svelte";
</script>

<main>
  <section id="sidebar">
    <Sidebar />
  </section>
  <section id="editor">
    <ContentSection />
  </section>
</main>

<style>
  main {
    display: flex;
    overflow: hidden;
    height: 100%;
  }

  #sidebar {
    display: flex;
    flex: 0 0 23%;
    background-color: #f5f5f5;
  }

  #editor {
    flex: 1;
    padding: 10px 16px 10px 8px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
</style>
