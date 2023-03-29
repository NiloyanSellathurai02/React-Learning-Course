import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";

import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    title: "Audi",
    amount: 398.99,
    date: new Date(2022, 2, 29),
    id: Math.random().toString(),
  },
  {
    title: "Centraal Beheer",
    amount: 88.75,
    date: new Date(2022, 2, 31),
    id: Math.random().toString(),
  },
  {
    title: "Belastingdienst",
    amount: 79.0,
    date: new Date(2022, 3, 1),
    id: Math.random().toString(),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};
export default App;
