var num1 = prompt("Enter a number");
var num2 = prompt("Enter another number");
var num3 = prompt("Enter one last number");

if (num3 < num2)
{
  temp = num2
  num2 = num3
  num3 = temp
}
if (num3 < num1)
{
  temp = num1
  num1 = num2
  num2 = temp
}
if (num3 < num2)
{
  temp = num2
  num2 = num3
  num3 = temp
}
if (num2 < num1)
{
  temp = num1
  num1 = num2
  num2 = temp
}


console.log(num1 + " " + num2 + " " + num3);

