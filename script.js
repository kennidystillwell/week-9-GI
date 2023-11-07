//added event listeners for addIncome and addExpense buttons
incomeBtn.addEventListener('click', addIncome);
expenseBtn.addEventListener('click', addExpense);

//defined variables for income, expense, and total budget
let income = 0;
let expenses = 0;
let totalBudget = 0;

//reference all of my html elements using query selectors
const incomeDescription = document.querySelector('.budget-income .description');
const incomeAmount = document.querySelector('.budget-income .amount');
const incomeBtn = document.querySelector('.income-btn');
const expenseDescription = document.querySelector('.budget-expense .description');
const expenseAmount = document.querySelector('.budget-expense .amount');
const expenseBtn = document.querySelector('.expense-btn');
const incomeValue = document.querySelector('.income-value span');
const expensesValue = document.querySelector('.expenses-value span');
const totalValue = document.querySelector('.budget-total span');