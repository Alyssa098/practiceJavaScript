var player1 = prompt("Player 1, enter your move! Rock, Paper, or Scissors.");
var player2 = prompt("Player 2, enter your move! Rock, Paper, or Scissors.");


if (player1.toUpperCase() == player2.toUpperCase()){
  console.log("It's a tie!!!");
}
else if (player1.toUpperCase() == "ROCK" && player2.toUpperCase() == "SCISSORS")
{
  console.log("Player 1 wins!!!");
}
else if (player1.toUpperCase() == "ROCK" && player2.toUpperCase() == "PAPER")
{
  console.log("Player 2 wins!!!");
}
else if (player1.toUpperCase() == "SCISSORS" && player2.toUpperCase() == "PAPER")
{
  console.log("Player 1 wins!!!");
} 
else if (player1.toUpperCase() == "SCISSORS" && player2.toUpperCase() == "ROCK")
{
  console.log("Player 2 wins!!!");
}
else if (player1.toUpperCase() == "PAPER" && player2.toUpperCase() == "ROCK")
{
  console.log("Player 1 wins!!!");
}
else 
{
  console.log("Player 2 wins!!!")
}
  