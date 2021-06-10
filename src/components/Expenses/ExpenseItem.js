import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
    
    const eprice=props.amount;
    return (
     <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price"> {eprice} </div>
        </div>
       
        </Card>
        );
}




export default ExpenseItem;