//create a funtion for the computer to randomly return 
//either rock paper or scissors
function computerPlay() {
    randomPlay = Math.floor(Math.random() * 3);
    if (randomPlay == "0") {
        return "rock";
    }
    else if (randomPlay == "1") {
        return "paper";
    }
    else {
        return "scrissors";
    }
}
//create a function for a single round
function playRound() {
    //prompt the player to pick either r,p,s
    let playerInput = prompt("Rock, Paper, Scissors?");
    //computer will randomly pick r,p,s with the function
    const computerSelection = computerPlay();
    //convert user input to lower case
    let playerSelection = playerInput.toLowerCase();
    //compare player input with computers random pick and return results
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            console.log("It's a Draw!");
            return "draw";
        }
        else if (computerSelection === "paper") {
            console.log("You lose! Paper beats rock!");
            return "lose";
        }
        else {
            console.log("You win! Rock beats scissors!");
            return "win";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log("You win! Paper beats rock!");
            return "win";
        }
        else if (computerSelection === "paper") {
            console.log("It's a draw!");
            return "draw";
        }
        else {
            console.log("You lose! Scissors beats paper!");
            return "lose";
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            console.log("You lose! Rock beats scissors!");
            return "lose";
        }
        else if (computerSelection === "paper") {
            console.log("You win! Scissors beats paper!");
            return "win";
        }
        else {
            console.log("It's a draw!");
            return "draw";
        }
    }
    //if nothing matches the asked input, return invalid input
    else {
        console.log("Invalid Input!");
    }
}
//create function to loop the single round into a game of 5
//and count the score to determine a winner 
function game() {
    //used to count the player score
    let playerScore = 0;
    //used to count the computer score
    let computerScore = 0;
    //used to count the games played
    let playedGames = 0;
    //looping the single rounds until 5 rounds are played
    while (playedGames < 5) {
        //add 1 to played games ro reach desired rounds
        playedGames++;
        roundScore = playRound();

        //compare the single rounds to determine a winner and count the score
        if (roundScore === "win") {
            playerScore++;
            console.log(`Player ${playerScore} : ${computerScore} Computer`);
        }
        else if (roundScore === "lose") {
            computerScore++;
            console.log(`Player ${playerScore} : ${computerScore} Computer`);
        }
        else if (roundScore === "draw") {
            console.log(`Player ${playerScore} : ${computerScore} Computer`);
        }
        else {
            playedGames--;
        }
    }
    //after 5 rounds print the results to determine a winner
    if (playerScore > computerScore) {
        console.log(`You win! Player ${playerScore} : ${computerScore} Computer`)
    }
    else if (playerScore < computerScore) {
        console.log(`You lose! Player ${playerScore} : ${computerScore} Computer`)
    }
    else {
        console.log(`It's a draw! Player ${playerScore} : ${computerScore} Computer`)
    }
}