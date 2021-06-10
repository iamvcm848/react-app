import React , { useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES= [
  {
    id: 'e1',
    title: 'Valen Mascarenhas',
    amount: 7668,
    date: new Date(2020, 2, 14),
  },
  { id: 'e2', 
  title: 'Risabh Verma', 
  amount: 7913, 
  date: new Date(2021, 1, 17) ,
},
  {
    id: 'e3',
    title: 'Siddesh Marathe',
    amount: 4002,
    date: new Date(2019, 3, 28),
  },
  {
    id: 'e4',
    title: 'S BarathKumar ',
    amount: 4503,
    date: new Date(2021, 5, 12),
  },
];


function App() {

  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = (expense) =>{
    
    
    setExpenses((prevExpenses)=>{
      return [expense,...expenses];
    });

  };



  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
