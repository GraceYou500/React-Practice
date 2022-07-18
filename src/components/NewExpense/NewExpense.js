import React from 'react'; // not necessary to add, just to clear JSX is using react liabrary.
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
