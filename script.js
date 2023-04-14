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

    let result = "Its a tie !"; // declaring a tie as the basis allow me to delete every tie event check, as if no-one won, its a tie
    let gameResult ="gdg";
    if(playerSelection.toLowerCase()=== "rock")
    {
        if(computerSelection === "paper")
        {
            //The computer won that round 
            result = "The computer won : paper beat rock !";
            computerScore++;
        }
        else if(computerSelection === "cissors")
        {
            // the player won that round
            result = "The player won : rock beat cissors !";
            playerScore++;
        }
    }
    else if(playerSelection.toLowerCase()=== "paper")
    {
        if(computerSelection === "rock")
        {
            // the player won that round
            result = "The player won : paper beat rock !";
            playerScore++;
        }
        else if(computerSelection === "cissors")
        {
            //The computer won that round
            result = "The computer won : cissors beat paper !";
            computerScore++;
        }
    }
    else if(playerSelection.toLowerCase()=== "cissors")
    {
        if(computerSelection === "rock")
        {
            result = "The computer won : rock beat cissors";
            computerScore++;
            // the computer won that round
        }
        else if(computerSelection === "paper")
        { 
            result ="The player won : cissors beat paper";
            playerScore++;
            //the player won that round
        }
    }
    gameResult = "The computer played : " + computerSelection +"\n" + "The player played : " + playerSelection + "\n" + result + "\n";
    return gameResult;
}

let computerScore = 0 ;
let playerScore = 0 ;

function oneRound(playerChoice){
    const computerMove = getComputerChoice();
    console.log(playRound(playerChoice, computerMove));
}

/* Commented the play section to not get prompted while testing
do{
const playerMove = prompt("What is your play ?");
const computerMove = getComputerChoice();

console.log(playRound(playerMove, computerMove));
}while(computerScore < 2 || playerScore < 2);


if(playerScore === 2){ //check if it is the player count that allowed the exit of the loop => player won
    console.log("The player won the best of 5");
}
else{ // else the computer win counter caused the exit, ence it won.
    console.log("The computer won the best of 5");
}




const rock= document.querySelector("#rockButton");
rock.addEventListener('click', fonction (e) => {
    e.target.style.background = 'blue';
});


const cissors = document.querySelector("#cissorsButton");
cissors.onclick = oneRound("cissors");
*/
function logText(){
    console.log("paper was clicked !")
}

const rock = document.querySelector("#paperButton");
rock.addEventListener('click',oneRound('rock'));

