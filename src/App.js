import Expenses from "./Components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      title: "car Insurance",
      amount: 98.2,
      date: new Date(2020, 7, 14),
    },
    {
      title: "toilet paper",
      amount: 9898,
      date: new Date(2021, 8, 20),
    },
    {
      title: "Bank",
      amount: 596874568945,
      date: new Date(2000, 7, 14),
    },
    {
      title: "Note books",
      amount: 10,
      date: new Date(2030, 7, 14),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
      {/* for (let i = 0; i < expenses.length-1; i++) {
      <ExpenseItem title={expenses[i].title} amount={expenses[i].amount} date={expenses[i].date}></ExpenseItem>    
} */}
    </div>
  );
}

export default App;
