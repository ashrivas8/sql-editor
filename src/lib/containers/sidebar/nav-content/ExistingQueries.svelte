<script>
  import QueryBtn from "../../../components/QueryBtn.svelte";

  const existingQueries = [
    'select * from customers;',
    'select contact_name, postal_code, country from customers limit 5;',
    'select * from products;',
    'select productID, productName, unitsInStock from products where discontinued=\'0\' limit 10',
  ];
</script>

{#each existingQueries as query, idx (idx)}
  <QueryBtn queryStr={query} />
{/each}


<style>
  
</style>
