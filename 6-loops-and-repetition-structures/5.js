// Write a program which, for any positive integer n, figures out n factorial. For example, 7 factorial is 7 * 6 * 5 * 4 * 3 * 2 * 1.

var userNum = prompt("Please enter a number to get its factorial.");
userNum = parseInt(userNum);
var factorial = 1;
while(userNum > 0){
  factorial *= userNum;
  userNum--;
}
console.log(factorial);