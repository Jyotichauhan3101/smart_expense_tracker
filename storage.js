// storage.js
export function getExpenses() {
  return JSON.parse(localStorage.getItem("expenses") || "[]");
}

export function saveExpense(expense) {
  const expenses = getExpenses();
  expenses.push(expense);
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

export function getTotal() {
  return getExpenses().reduce((sum, e) => sum + Number(e.amount), 0);
}
