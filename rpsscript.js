/* 1.Create function getComputerChoice
If the floor of a random number from 1 to 4 is greater or equal to 3 return the string "Rock" 
else if the floor of a random number from 1 to 4 is greater or equal to 2 return the string "Scissors
else if the floor of a random number from 1 to 4 is greater or equal to 1 return the string "Paper"

Create a function named getHumanChoice with the parameter input {
 input is equal to the prompt "Rock,Paper,Scissors!!! (Pick One Please) with the result being in uppercase
 return input"} 
 
 Create variable humanScore = 0
 Create variable computerScore =0


 Create a function named playround() with the parameters humanChoice and computerChoice() {
 if (humanChoice is equal to  the string "ROCK" and  computerChoice is equal to the string "Scissors") {
    log "You Win"
     increment human Score
 
 }
 
 */

 












function getComputerChoice(){
 if (Math.floor(Math.random()* (4-1) + 1) >= 3) {
    return "Rock"
 }
 else if (Math.floor(Math.random()* (4-1) + 1) >= 2) {
    return "Scissors"
 }
 else if (Math.floor(Math.random()* (4-1) + 1) >= 1) {
   
    return "Paper"
 }
};
function getHumanChoice(input) {
    input =prompt("Rock, Paper,Scissors!!! (Pick One please)").toUpperCase();
    for (let i = 0; i <5; i++){
        return input
}}
//Scoreboard//
let humanScore = 0
let computerScore= 0

// Play a game of 5 rounds from the playRound() function
// //

 function playRound(humanChoice,computerChoice) {
   humanChoice = getHumanChoice()
   computerChoice= getComputerChoice()
   if (humanChoice === "ROCK" & computerChoice === "Scissors") {
      console.log("You Win! Mighty Rock smushs Scissors")
       ++humanScore;
    }
    else if (humanChoice === "ROCK" & computerChoice === "Rock") {
        console.log("Aw tie, Rock and Rock is a stalemate")
    }
    else if (humanChoice === "ROCK" & computerChoice === "Paper") {
        console.log("Loser!!!  The computer's paper has smothered your puny rock")
        ++computerScore;
    }
    else if (humanChoice=== "PAPER" & computerChoice=== "Paper") {
        console.log("tie  Paper and Paper make more paper")
    }
    else if (humanChoice === "PAPER" & computerChoice === "Scissors") {
        console.log("Ultra Mega Loser!!! You paper was cut by the mighty scissors")
        computerScore=computerScore++
    }
    else if (humanChoice === "PAPER" &computerChoice=== "ROCK") {
        console.log("Win!!!  Paper enfolds Rock")
        humanScore=humanScore++
    } else if (humanChoice === "SCISSORS" &computerChoice === "Scissors") {
        console.log("tie, Scissors and Scissors do nothing")
    } else if (humanChoice=== "SCISSORS" & computerChoice === "Rock") {
    console.log("Scissors is crushed by Rock")
         computerScore=computerScore++}
    else {
        console.log("You're no fun.");
    }

 }
   function playGame() {
    playRound(humanPick,computerPick);
    playRound(humanPick,computerPick);
    playRound(humanPick,computerPick);
    playRound(humanPick,computerPick);
    playRound(humanPick,computerPick);

    if (humanScore > computerScore) {
    console.log("Human WINNNN!!")
}
else if ( computerScore> humanScore){
    console.log("Computer WIN!")
}

    
   }






let computerPick= getComputerChoice()
let humanPick=getHumanChoice()
playGame();



console.log(humanScore);
console.log(computerScore);
