import React, {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle,setEnteredTitle]= useState('');
    const [enteredAmount ,setEnteredAmount]=useState('');
    const [enteredDate , setEnteredDate]=useState('');

   /*  const[userInput,setUserInput]=useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:''
    }); */

    const dateChangedHandler = (event) => {
        setEnteredDate(event.target.value);
       /*  setUserInput({
            ...userInput,
            enteredTitle:event.target.value,
        }); */
        /* setUserInput((prevState)=>{
            return {...prevState,enteredTitle:event.target.value};

        }); */
        
    }

    const amountChangedHandler = (event) => {
        setEnteredAmount(event.target.value);
        /* setUserInput({
            ...userInput,
            enteredAmount:event.target.value,
        }); */

    }
    const titleChangedHandler = (event) => {
        setEnteredTitle(event.target.value);
        /* setUserInput({
            ...userInput,
            enteredDate:event.target.value,
        }); */
        
    };

    const submitHandler = (event) =>{
        event.preventDefault();
       

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
          };


        props.onSaveExpenseData(expenseData);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');

    }

   
    
    
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Name</label>
                    <input value={enteredTitle} type="text" onChange={titleChangedHandler} />
                </div>
                <div className="new-expense__control">
                    <label>ID</label>
                    <input value={enteredAmount} type="number" onChange={amountChangedHandler} min="0.01" step="0.01" />
                </div>
                <div className="new-expense__control">
                    <label>Date of Registration</label>
                    <input value={enteredDate} type="date" onChange={dateChangedHandler} min="2018-01-01" max="2022-12-31" />
                </div>

            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Record</button>
            </div>
        </form>

    );

}

export default ExpenseForm;