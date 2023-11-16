import customerData from '../../../data/customers.json';

export function getQueryResults() {
  const results = {
    columns: [],
    data: [], // array of arrays
  };

  const truncateData = customerData.slice(1, 25);
  
  for (let item in customerData[0]) {
    results.columns.push(customerData[0][item]);
  }

  for (let i in truncateData) {
    let temp = [];

    for (let j in truncateData[i]) {
      temp.push(truncateData[i][j]);
    }

    results.data.push(temp);
  }

  return results;
}