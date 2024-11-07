const prompt = require("prompt-sync")()
// Get user input
let isStudent = prompt("Are you a student?");
let age = parseInt(prompt("Enter your age:"));
let originalPrice = parseFloat(prompt("Enter the original price:"));

// Check eligibility for discount
if ((isStudent) || (age >= 60)) {
  // Calculate discounted price
  let discount = originalPrice * 0.10;
  let discountedPrice = originalPrice - discount;

  console.log(`You qualify for a 10% discount.`);
  console.log("Original price: "+ originalPrice );
  console.log("Discounted price: "+ discountedPrice );
} 
else {
    console.log(`You do not qualify for a discount.`);
    console.log("Original price: "+ originalPrice );
}
