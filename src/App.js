import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import React, { useState } from 'react';

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14), // It is a date abject, need .toISOString() method
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = expense => {
    console.log('addExpenseHandler', expense);

    // prevExpenses => {
    //   const exp = [expense, ...prevExpenses];
    //   console.log('exp', exp);
    //   console.log('expense', expense);
    //   console.log('prevExpenses', prevExpenses);
    //   return [expense, ...prevExpenses];
    // }
    const exp = [expense, ...expenses];
    console.log('exp', exp);
    setExpenses(exp);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
