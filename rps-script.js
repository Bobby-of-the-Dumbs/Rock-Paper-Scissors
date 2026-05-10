function getComputerChoice(){
    if (Math.random() % 2 === 0) {
        return "Rock"

    }
    else if (Math.random() % 3 || 5 === 0) {
       return "Scissors" 
    }
    else {
        return "Paper"
    }  
}
console.log(getComputerChoice)
