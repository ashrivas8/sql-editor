import customerData from '../../../data/customers.json';

export function getQueryResults() {
  const results = {
    columns: [],
    data: [], // array of arrays
  };

  // const customerData = customerData.slice(1, 25);
  
  for (let item in customerData[0]) {
    results.columns.push(customerData[0][item]);
  }

  for (let i in customerData) {
    let temp = [];

    for (let j in customerData[i]) {
      temp.push(customerData[i][j]);
    }

    results.data.push(temp);
  }

  return results;
}