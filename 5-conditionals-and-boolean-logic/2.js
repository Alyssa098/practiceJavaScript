// Write a program which prompts the user for a number, outputs "Valid" if the number is positive, or "Invalid" if the number is less than or equal to zero.

var num = prompt("Enter your number.");

if (num > 0){
  console.log("The number is valid.");
}
else{
  console.log("The number is invalid.");
}