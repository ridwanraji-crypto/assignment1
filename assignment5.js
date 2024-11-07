const prompt = require("prompt-sync")()
// Get user input
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

// Check signs of numbers
if (num1 > 0 && num2 > 0) {
  console.log("Both are positive.");
}
else if (num1 === 0 && num2 === 0) {
  console.log("Both are zero.");
}
else {
  console.log("At least one is negative or zero.");
}
