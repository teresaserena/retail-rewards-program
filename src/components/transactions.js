import React from 'react';
import data from './data/data.json';
import {calculatePoints} from './totals.js';
import { modelCustomer } from './customer.js';

/*
* Takes entire json doc and reads through all customers
* TODO: Set date 3 months in the past from today and show last three months instead of 3 hardcoded months
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
        modelCustomer(transactions, data.customerName, saleData, totalPoints)
    );
  }
  )