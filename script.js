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
    let resultat ="";
    const computerMove = getComputerChoice();
    resultat=playRound(playerChoice, computerMove);
    Result.textContent= resultat;

}

//Associating the JS to the the html file, to allow the javaScript to modify element of the html page
const buttons= document.querySelector('#Buttons');
const Games= document.querySelector('#Games');


// Creating each indivual buttons
const Paper = document.createElement('button');
Paper.textContent = 'Paper';

const Rock = document.createElement('button');
Rock.textContent='Rock';

const Cissors = document.createElement('button');
Cissors.textContent='Cissors';

// Apppending each button to the DIV associated to it in the html; the buttons will now appear
buttons.appendChild(Rock);
buttons.appendChild(Paper);
buttons.appendChild(Cissors);


//Creationg the result part of the JS to display them in the html
const Result = document.createElement('div');
Result.textContent="The games hasn't started yet";

Rock.addEventListener("click",(e) => oneRound('rock'));
Paper.addEventListener("click",(e) => oneRound('paper'));
Cissors.addEventListener("click",(e) => oneRound('cissors'));


//Appending the rule in the display Games div available in the HTML
Games.appendChild(Result);

