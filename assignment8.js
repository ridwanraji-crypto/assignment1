// Get user input
let monthlyIncome = parseFloat(prompt("Enter your monthly income:"));
let totalExpenses = parseFloat(prompt("Enter your total monthly expenses:"));

// Calculate monthly savings
let monthlySavings = monthlyIncome - totalExpenses;

// Calculate 20% savings goal
let savingsGoal = monthlyIncome * 0.20;

// Check if savings meet goal
if (monthlySavings >= savingsGoal) {
  console.log("Goal Achieved! Your monthly savings is " + monthlySavings);
} else {
    console.log("Increase Savings! Your monthly savings is " + monthlySavings );
    console.log("You need to save an additional " + savingsGoal - monthlySavings + " to meet your goal.");
}

// Display summary
console.log("Monthly Income: " + monthlyIncome);
console.log("Total Expenses: " + totalExpenses);
console.log("Monthly Savings: " + monthlySavings);
console.log("20% Savings Goal: " + savingsGoal);

