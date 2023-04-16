function getComputerChoice()
{
    //Calling a Random number, the 3 max range set it up to get only 3
    // possibles options : 0 1 or 2
    // Each one of those will have a corresponding move in the game
    let choice = Math.floor(Math.random() * 3);
    let move;
    if(choice == 0)
    {
        move ="pierre";
    }
    else if(choice == 1)
    {
        move="papier";
    }
    else if(choice == 2)
    {
        move="ciseaux";
    }
    return move;
}


function playRound(playerSelection, computerSelection)
{
    let result = ". C'est une egalite !"; // declaring a tie as the basis allow me to delete every tie event check, as if no-one won, its a tie
    let gameResult ="";
    nbr_round++;
    if(playerSelection.toLowerCase()=== "pierre")
    {
        if(computerSelection === "papier")
        {
            //The computer won that round 
            result = ". L'ordinateur a gagne : papier bat la pierre ! ";
            computerScore++;
        }
        else if(computerSelection === "ciseaux")
        {
            // the player won that round
            result = ". Le joueur a gagne : la pierre bat les ciseaux ! ";
            playerScore++;
        }
    }
    else if(playerSelection.toLowerCase()=== "papier")
    {
        if(computerSelection === "pierre")
        {
            // the player won that round
            result = ". Le joueur a gagne : le papier bat la pierre ! ";
            playerScore++;
        }
        else if(computerSelection === "ciseaux")
        {
            //The computer won that round
            result = ". L'ordinateur a gagne : les ciseaux battent le papier ! ";
            computerScore++;
        }
    }
    else if(playerSelection.toLowerCase()=== "ciseaux")
    {
        if(computerSelection === "pierre")
        {
            result = ". L'ordinateur a gagne : la pierre bat les ciseaux ! ";
            computerScore++;
            // the computer won that round
        }
        else if(computerSelection === "papier")
        { 
            result =". Le joueur a gagne : les ciseaux battent le papier ! ";
            playerScore++;
            //the player won that round
        }
    }
    gameResult = "Le joueur a joue : " + playerSelection + ". L'ordinateur a joue : " + computerSelection  + result ;
    return gameResult;
}

// a function that play one round
function oneRound(playerChoice){

    let computerChoice = getComputerChoice();
    actualisation(playRound(playerChoice, computerChoice)) ;
    
    if(computerScore === 5)
    {
    //The computer won
        annoncement.textContent = "L'ordinateur a GAGNE ! Essaye encore !";
        lock(true);

    }
    if(playerScore === 5)
    {
        annoncement.textContent = "Tu as GAGNE ! Felicitations! "
        lock(true);
    }
}
// a function that display the changes of the game state in the webPage
function actualisation (annonce){
     //the annonce is gonna be displayed in the annoncement section of the webpage
    annoncement.textContent = annonce;
    player.textContent = "Score du joueur : " + playerScore;
    computer.textContent = "Score de l'adversaire : " + computerScore;
    round.textContent = "Nombre de rounds : " +nbr_round;
}

//Remet tout la page a l etat initial, pret pour une nouvelle partie
function reboot(){
    computerScore = 0;
    playerScore = 0;
    nbr_round =0 ;
    actualisation("La partie n'a pas pas encore commence ");
    lock(false);
}

//If true  is send, the 3play button become unclickable, if else is send they get unlocked
function lock(cadena){
    rock.disabled = cadena;
    paper.disabled = cadena;
    scissors.disabled = cadena;
}


let computerScore = 0 ;
let playerScore = 0 ;
let nbr_round = 0 ;
let udie = 0;


// Connecting the javascript to the 3 buttons
const rock = document.querySelector('#rockSelection');
const paper = document.querySelector('#paperSelection');
const scissors = document.querySelector('#scissorsSelection');
const recommencer = document.querySelector('#reStart');

//Connecting the javascript to the 4 informations display pannels
const player = document.querySelector('#joueur');
const round = document.querySelector('#manche');
const computer = document.querySelector('#ordinateur');
const annoncement = document.querySelector('#resultat');



rock.addEventListener('click', (e) => oneRound("pierre"));
paper.addEventListener('click',(e) => oneRound("papier"));
scissors.addEventListener('click',(e) => oneRound("ciseaux"));

recommencer.addEventListener('click', (e) => reboot());

