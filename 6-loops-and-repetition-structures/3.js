// Write a program that counts from 1 to 100 by 2's. Now make it work by 3's. Now have it count from 1 to 100 by any (positive) increment the user desires.

for(var i = 1; i < 100; i += 2){
  console.log(i)
}

for(var i = 1; i < 100; i += 3){
  console.log(i)
}

var userNum = prompt("Please enter a number to increment from 1 to 100.")

for(var i = 1; i < 100; i += parseInt(userNum)){
  console.log(i)
}