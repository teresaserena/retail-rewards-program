import React from 'react';
import data from './data/data.json';
import {oneMonthTotal, calculatePoints} from './totals.js';

/*
* Takes entire json doc and reads through all customers
* TODO: Break out customer functionality into component
* Set date 3 months in the past from today and show last three months instead of 3 hardcoded months
*/
export const dataDisplay = data.map(function(data){
    let transactions = data.transactions;
    let totalPoints = 0;
    let points = 0;
    let saleData = transactions.map(function(transactions){
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