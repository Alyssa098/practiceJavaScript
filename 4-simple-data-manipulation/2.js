// Write a program that sets each of two variables to a number, then displays the integer quotient and integer result to the screen, like so: 7 / 3 = 2 r 1. (Hint: parseInt() in JavaScript is like to_i in Ruby.)

var var1 = 7
var var2 = 3
quotient = var1 / var2
remainder = var1 % var2
console.log(var1 + " / " + var2 + " = " + parseInt(quotient) + " r " + remainder)