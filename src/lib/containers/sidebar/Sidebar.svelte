<script>
  import tableIcon from '../../../assets/table.svg';
  import editIcon from '../../../assets/edit.svg';
  import NavCell from '../../components/NavCell.svelte';

  const navTabs = [
    {
      name: 'home',
      label: '',
      icon: editIcon,
    },
    {
      name: 'tables',
      label: 'Tables',
      icon: tableIcon,
    }
  ];

  let activeTabIdx = 0;
</script>

<div class="nav-column">
  {#each navTabs as tab, idx}
    <NavCell handleClick={() => activeTabIdx = idx} selected={idx === activeTabIdx}>
      <img slot="icon" src={tab.icon} alt={tab.name} />
      <span slot="name">{tab.label}</span>
    </NavCell>
  {/each}
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
</style>