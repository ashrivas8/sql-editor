import customerData from '../../../data/customers.json';

export function getQueryResults() {
  const results = {
    columns: [],
    data: [], // array of arrays
  };

  const rowData = customerData.slice(1);
  
  for (let item in customerData[0]) {
    results.columns.push(customerData[0][item]);
  }
  for (let i in rowData) {
    let temp = [];
    
    for (let j in rowData[i]) {
      temp.push(rowData[i][j]);
    }
    
    results.data.push(temp);
  }

  return results;
}