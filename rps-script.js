function getComputerChoice(){
    if (Math.floor(Math.random()* (4-1)+ 1) >= 3) {
        return "Rock"

    }
    else if(Math.floor(Math.random() * (4-1) +1 )>= 2) {
       return "Scissors" 
    }
    else if(Math.floor(Math.random() *(4-1)+1) >= 1) {
        return "Paper"
    } ; 
};
function getHumanChoice(input) {
    input = prompt("Rock, Paper, Scissors! Please pick one of the 3 ").toUpperCase()
    if (input === "ROCK" & getComputerChoice() === "Rock") {
        console.log("Tie");
    }
    else if (input === "ROCK" & getComputerChoice()=== "Scissors") {
        console.log("You win")
    }
};



console.log(getComputerChoice());

