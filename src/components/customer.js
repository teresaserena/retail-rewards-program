import React from 'react';
import { oneMonthTotal } from './totals.js';

/*
* models customer data based off a few inputs
*/
export function modelCustomer(transactions, customerName, saleData, totalPoints){
return(<div className="card">
          <div className="card-header bg-info text-light">Customer: {customerName}</div>
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