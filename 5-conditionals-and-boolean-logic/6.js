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