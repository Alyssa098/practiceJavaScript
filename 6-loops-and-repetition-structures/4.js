// Write a program which prompts the user for a positive odd number, and which keeps prompting the user until they successfully input such a number.

var userNum = prompt("Please enter a positive odd number.");
userNum = parseInt(userNum);

while (userNum < 0 || userNum % 2 == 0){
  userNum = prompt("Wrong input. Please enter a positive odd number.");
  userNum = parseInt(userNum);
}
console.log(userNum);