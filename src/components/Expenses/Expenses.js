import './Expenses.css';
import Card from '../GeneralUI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';

function Expenses(props) {
  console.log(props);
  const [filteredYearData, setFilteredYearData] = useState('2020');

  const filteredYearHandler = selectedYear => {
    setFilteredYearData(selectedYear);
  };

  const filteredExpenses = props.item.filter(
    el => el.date.getFullYear().toString() === filteredYearData
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onFilteredYear={filteredYearHandler}
          filteredYear={filteredYearData}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
