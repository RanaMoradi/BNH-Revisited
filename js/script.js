// Data declared outside functions so it persists across button clicks
const choices = ["Bear", "Ninja", "Hunter"];
let playerWins = 0;
let computerWins = 0;

function playGame(playerChoice)
{
  // Pick random computer choice using array index
  let randomIndex = Math.floor(Math.random() * choices.length);
  let computerChoice = choices[randomIndex];

  // Determine outcome
  let outcome = "";

  if (playerChoice === computerChoice)
  {
    outcome = "It's a Tie!";
  }
  else if (
    (playerChoice === "Bear"   && computerChoice === "Hunter") ||
    (playerChoice === "Hunter" && computerChoice === "Ninja")  ||
    (playerChoice === "Ninja"  && computerChoice === "Bear")
  )
  {
    outcome = "You win!";
    playerWins++;
  }
  else
  {
    outcome = "The computer wins!";
    computerWins++;
  }

  // Update results box — wording matches spec mockup exactly
  document.getElementById("player-choice-display").innerHTML   = "You chose " + playerChoice + ".";
  document.getElementById("computer-choice-display").innerHTML = "The computer chose " + computerChoice;
  document.getElementById("outcome-display").innerHTML         = outcome;

  // Update win counter — matches spec mockup exactly
  document.getElementById("player-wins-display").innerHTML   = "Your Wins: " + playerWins;
  document.getElementById("computer-wins-display").innerHTML = "Computer Wins: " + computerWins;

  // Show results box, win counter, and play again button
  document.getElementById("results-box").style.display          = "block";
  document.getElementById("win-counter").style.display          = "block";
  document.getElementById("play-again-btn").style.display       = "inline";
  document.getElementById("play-again-hr-top").style.display    = "block";
  document.getElementById("play-again-hr-bottom").style.display = "block";
}

function playAgain()
{
  // Hide results — win counters stay in memory and will show again next round
  document.getElementById("results-box").style.display          = "none";
  document.getElementById("win-counter").style.display          = "none";
  document.getElementById("play-again-btn").style.display       = "none";
  document.getElementById("play-again-hr-top").style.display    = "none";
  document.getElementById("play-again-hr-bottom").style.display = "none";
}