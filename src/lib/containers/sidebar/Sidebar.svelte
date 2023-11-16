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
        <img slot="icon" src={tab.icon} alt={tab.name} />
        <span slot="name">{tab.label}</span>
      </NavCell>
    {/each}
  </div>
  <NavContent componentFunc={navTabs[activeTabIdx]?.component} />
</div>

<style>
  .nav-column {
    height: 100%;
    background-color: #9dacc39c;
    width: 18%;
    border-top-right-radius: 4px;
    padding: 8px 0;
  }

  img[slot="icon"] {
    height: 28px;
  }

  span[slot="name"] {
    font-size: 12px;
    font-weight: bold;
  }

  .sidebar-content {
    display: flex;
  }
</style>