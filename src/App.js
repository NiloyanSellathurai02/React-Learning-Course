import Expenses from "./components/Expenses/Expenses";

import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const data = [
    {
      title: "Audi",
      amount: 398.99,
      date: new Date(2022, 2, 29),
    },
    {
      title: "Centraal Beheer",
      amount: 88.75,
      date: new Date(2022, 2, 31),
    },
    {
      title: "Belastingdienst",
      amount: 79.0,
      date: new Date(2022, 3, 1),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={data} />
    </div>
  );
};
export default App;
