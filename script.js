// Test to prove the scipt external file is linked to the html index page
    console.log("Hello World");


function getComputerChoice(){
    //Calling a Random number, the 3 max range set it up to get only 3
    // possibles options : 0 1 or 2
    // Each one of those will have a corresponding move in the game
    let choice = Math.floor(Math.random() * 3);
    let move;
    if(choice == 0)
    {
        move ="rock";
    }
    else if(choice == 1)
    {
        move="paper";
    }
    else if(choice == 2)
    {
        move="cissors";
    }
    return move;

}

function playRound(playerSelection, computerSelection){

    let result = "abc"; // random declaration
    let gameResult ="gdg";
    if(playerSelection.toLowerCase()=== "rock")
    {
        if(computerSelection === "rock")
        {
            result = "Its a tie !";
            //Its a tie
        }
        else if(computerSelection === "paper")
        {
            //The computer won that round 
            result = "The computer won : paper beat rock !";
        }
        else if(computerSelection === "cissors")
        {
            // the player won that round
            result = "The player won : rock beat cissors !";
        }
    }
    else if(playerSelection.toLowerCase()=== "paper")
    {
        if(computerSelection === "rock")
        {
            // the player won that round
            result = "The player won : paper beat rock !";
        }
        else if(computerSelection === "paper")
        { 
            result = "Its a tie !";
            //Its a tie
        }
        else if(computerSelection === "cissors")
        {
            //The computer won that round
            result = "The computer won : cissors beat paper !";
        }
    }
    else if(playerSelection.toLowerCase()=== "cissors")
    {
        if(computerSelection === "rock")
        {
            result = "The computer won : rock beat cissors";
            // the computer won that round
        }
        else if(computerSelection === "paper")
        { 
            result ="The player won : cissors beat paper";
            //the player won that round
        }
        else if(computerSelection === "cissors")
        {
            result ="its a tie !";
            //it's a tie
        }
    }
    gameResult = "The computer played : " + computerSelection +"\n" + "The player played : " + playerSelection + "\n" + result ;
    return gameResult;
}


const playerMove = prompt("What is your play ?");
const computerMove = getComputerChoice();


console.log("the computer played : " + computerMove);
console.log("the player played : " + playerMove);

console.log(playRound(playerMove, computerMove));