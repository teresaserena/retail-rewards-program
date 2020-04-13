import React from 'react';
import data from './data/data.json';

import './App.css';

/*
* Takes entire json doc and reads through all customers
*/
const dataInput = data.map((data) => {
  let transactions = data.transactions;
  let totalPoints = 0;
  var points = 0;
  let saleData = transactions.map((transactions) =>{
      points = calculatePoints(transactions.saleAmt);
      totalPoints += points;
      return(<li className="list-group-item">Date: {transactions.saleDate} - Amount: ${transactions.saleAmt} - Points earned this transaction: {points}</li>);
  })
  return (
      <div className="card">
        <div className="card-header bg-info text-light">Customer: {data.customerName}</div>
        <div className="card-block">{saleData}</div>
        <div className="card-footer">
            <div>October points: {oneMonthTotal(transactions, "10")}</div>
            <div>November points: {oneMonthTotal(transactions, "11")}</div>
            <div>December points: {oneMonthTotal(transactions, "12")}</div>
            <div>Total points:  {totalPoints}</div>
        </div>
      </div>
  );
}
)

/*
* This collects points by month
* 
*/
function oneMonthTotal(transactions, monthToFind){
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
* Calculates points per sale
*/
function calculatePoints(saleAmt){
  let points = 0;
  if(saleAmt > 100){
    points += (saleAmt-100)*2 + 50;
  }
  else if(saleAmt > 50 && saleAmt < 100){
    points += saleAmt-50;
  }
    return points;
}

function App() {
  return (
    <div className="App" >
      <h1>Reward Point Calculator</h1>
      <div className="container-sm text-left col-md-6">
             {dataInput}
          </div>
    </div>
  );
}

export default App;
