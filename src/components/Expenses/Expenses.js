import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../GeneralUI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

function Expenses(props) {
  const [filteredYearData, setFilteredYearData] = useState('2020');

  const filteredYearHandler = selectedYear => {
    setFilteredYearData(selectedYear);
    console.log('here2', selectedYear);
  };
  console.log('here3', filteredYearData);

  return (
    <div>
      <ExpensesFilter
        onFilteredYear={filteredYearHandler}
        filteredYear={filteredYearData}
      />
      <Card className="expenses">
        <ExpenseItem
          title={props.item[0].title}
          amount={props.item[0].amount}
          date={props.item[0].date}
        />
        <ExpenseItem
          title={props.item[1].title}
          amount={props.item[1].amount}
          date={props.item[1].date}
        />
        <ExpenseItem
          title={props.item[2].title}
          amount={props.item[2].amount}
          date={props.item[2].date}
        />
        <ExpenseItem
          title={props.item[3].title}
          amount={props.item[3].amount}
          date={props.item[3].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;
