// Write a program which asks the user to enter a "password" (hardcoded in the code itself). After three unsuccessful tries, the program should exit.

var password = "password";
var tries = 0;
var correct = false;


while (correct == false && tries < 3){
  
  var userPassword = prompt("Please enter your password");
  
  if (userPassword == password){
    console.log("Access Granted!");
    correct = true;
  }
  else{
    console.log("Access Denied! Try again.");
    tries += 1;
  }

}

if (tries >= 3){
  console.log("Too many ties!! Exiting program.")
}

