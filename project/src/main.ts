enum Status {
  Pending,
  Success,
  Cancelled
}

type Transaction = [string, number, Status]

let history: Array<Transaction> = [
  ["tx_001", 10.4, Status.Success],
  ["tx_002", 142.25, Status.Success],
  ["tx_003", 4265.42, Status.Cancelled]
]

function getTotalSuccessAmount(txList: Transaction[]): number{
  let result = txList.filter(x => x[2] == Status.Success)
    .map(x => x[1])
    .reduce((sum, current) => sum + current, 0);  
    
    return result;
}

var summ = getTotalSuccessAmount(history);
console.log(summ);