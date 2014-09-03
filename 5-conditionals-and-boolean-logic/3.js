// Write a program which prompts the user for a number and outputs "Valid" if the number is between 1 and 10 (inclusive) and "Invalid" otherwise.

var num = prompt("Enter your number.");

if(num > 0 && num < 11){
  console.log("The number is valid.");
}
else{
  console.log("The number is invalid.");
}