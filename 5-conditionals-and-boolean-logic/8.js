// Optional: Write a program which prompts the user for an all-caps string and which then checks to see if that string is indeed all-caps.

var string = prompt("Please enter an all-caps string.");

if(string == string.toUpperCase()){
  console.log("Valid entry. It is an all-caps string.")
}
else{
  console.log("Invalid! Not an all-caps string.")
}