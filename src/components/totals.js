/*
* collects points by month
* input: array of transactions per customer and a 2 digit month
* output: number
*/
export function oneMonthTotal(transactions, monthToFind){
    var customerTransactions = JSON.parse(JSON.stringify(transactions));
    var points = 0;
    for(var i = 0; customerTransactions.length > i; i++){
      let month = customerTransactions[i].saleDate.substring(0,2); 
      if(month === monthToFind){
        points += calculatePoints(customerTransactions[i].saleAmt);
      }
    }
    return points;
  }
/* 
* Calculates points per sale per transaction
* 
*/
export function calculatePoints(saleAmt){
    let points = 0;
    if(saleAmt > 100){
      points += (saleAmt-100)*2 + 50;
    }
    else if(saleAmt > 50 && saleAmt < 100){
      points += saleAmt-50;
    }
      return points;
  }