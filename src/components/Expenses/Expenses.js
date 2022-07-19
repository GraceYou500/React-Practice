import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../GeneralUI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

function Expenses(props) {
  console.log(props);
  const [filteredYearData, setFilteredYearData] = useState('2020');

  const filteredYearHandler = selectedYear => {
    setFilteredYearData(selectedYear);
  };

  return (
    <div>
      <ExpensesFilter
        onFilteredYear={filteredYearHandler}
        filteredYear={filteredYearData}
      />
      <Card className="expenses">
        {props.item.map(el => (
          <ExpenseItem
            key={el.id}
            title={el.title}
            amount={el.amount}
            date={el.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
