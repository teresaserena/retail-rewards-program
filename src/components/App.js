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
      return(<li className="list-group-item">Date: {transactions.saleDate} - Amount: {transactions.saleAmt} Transaction Points: {points}</li>);
  })
  return (
      <div className="card">
        <div className="card-header bg-info text-light">Customer: {data.customerName}</div>
        <div className="card-block">{saleData}</div>
        <div className="card-footer">
            Points per month:
            Total points:  {totalPoints}
        </div>
      </div>
  );
}
)

/*WIP*/
function oneMonthTotal(points){
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
      <div className="container-sm">
             {dataInput}
            <button className="btn btn-primary">Clear</button>
          </div>
    </div>
  );
}

export default App;
