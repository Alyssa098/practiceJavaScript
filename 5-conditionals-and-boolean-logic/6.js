// Prompt the user for a positive odd number. Write a program that uses a nested if-statement to determine if the user's input fulfills the conditions. Now write one that uses the logical operators (&& and/or ||) to do the same test, but in less time.

var num = prompt("Please enter a positive odd number.");

if(num > 0){
  if(num % 2 == 1){
    console.log("Way to go! This is a positive odd number.");
  }
  else{
    console.log("This is not a positive odd number.");
  }
}
else{
  console.log("This is not a positive odd number.");
}




//Same but with logical operators

if(num > 0 && num % 2 == 1){
  console.log("Awesome! This is a positive odd number.");
}
else{
  console.log("This is not a positive odd number.");
}