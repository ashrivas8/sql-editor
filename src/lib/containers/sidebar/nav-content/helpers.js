import customersTable from '../../../../data/customers.json';
import productsTable from '../../../../data/products.json';

/**
 * @param {string} tableName
 */
export function getTableInfo(tableName) {
  let tableCols = []
  switch (tableName) {
    case 'customers':
      tableCols = Object.values(customersTable[0]);
      break;
    case 'products':
      tableCols = Object.values(productsTable[0]);
      break;
  
    default:
      break;
  }

  return tableCols;
}
