import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget,expenses } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
}, 0);
  const [newBudget, setNewBudget] = useState(budget);
  const handleBudgetChange = (event) => {
    setNewBudget(event.target.value);
  };
  if (newBudget > 20000){
    alert("Budget can't be £20,000 or more")
  }
  if (newBudget < totalExpenses){
    alert("You cannot reduce the budget value lower than the spending")
  }
  return (
    <div className="alert alert-secondary">
      <span>Budget: $</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};
export default Budget;
