<script>
  import tableIcon from '../../../assets/table.svg';
  import editIcon from '../../../assets/edit.svg';
  import NavCell from '../../components/NavCell.svelte';
  import NavContent from '../../components/NavContent.svelte';
  import QueriesNav from './nav-content/QueriesNav.svelte';
  import TablesNav from './nav-content/TablesNav.svelte';

  const navTabs = [
    {
      name: 'home',
      label: '',
      icon: editIcon,
      component: QueriesNav,
      // component: () => import('./nav-content/QueriesNav.svelte'),
    },
    {
      name: 'tables',
      label: 'Tables',
      icon: tableIcon,
      component: TablesNav,
      // component: () => import('./nav-content/TablesNav.svelte'),
    }
  ];

  let activeTabIdx = 0;
</script>

<div class="sidebar-content">
  <div class="nav-column">
    {#each navTabs as tab, idx}
      <NavCell handleClick={() => activeTabIdx = idx} selected={idx === activeTabIdx}>
        <img slot="icon" src={tab.icon} alt={tab.name} width="28" height="28" />
        <span slot="name">{tab.label}</span>
      </NavCell>
    {/each}
  </div>
  <NavContent component={navTabs[activeTabIdx]?.component} />
</div>

<style>
  .nav-column {
    height: 100%;
    background-color: #9dacc39c;
    min-width: 18%;
    border-top-right-radius: 4px;
    padding: 24px 0;
  }

  span[slot="name"] {
    font-size: 12px;
    font-weight: bold;
  }

  .sidebar-content {
    display: flex;
    flex-grow: 1;
  }
</style>