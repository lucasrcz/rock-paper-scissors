//declaração das variavéis globais 
let playerScore = 0;
let computerScore = 0;
let computerSelection = '';
let playerSelection = '';
const computerRandom = ['rock', 'paper', 'scissors'];
//Computador joga, selecionando aleatoriamente do array.
function computerPlay() {
    computerSelection = computerRandom[Math.floor(Math.random() * computerRandom.length)];
    return computerSelection
}
//Ira mostrar as escolhas dos jogadores na partida
function updateChoicePlayer(){
    if (playerSelection == 'rock')
        return playerChoice.textContent = 'YOU:👊'
          else if(playerSelection == 'paper'){
          return playerChoice.textContent = 'YOU:🤚'
        }
          else if(playerSelection == 'scissors'){
          return  playerChoice.textContent = 'YOU:🖖'
          }
          else{
          return  playerChoice.textContent = 'YOU:'  
          }
}

function updateChoiceComputer(){
    if (computerSelection == 'rock')
        return computerChoice.textContent = 'PC:👊'
          else if(computerSelection == 'paper'){
          return computerChoice.textContent = 'PC:🤚'
        }
            else if(computerSelection == 'scissors'){
              return  computerChoice.textContent = 'PC:🖖'
          }
            else{
            return  computerChoice.textContent = 'PC:'  
          }
}

function round(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return winMessage.textContent ='It`s a drawn!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore = playerScore + 1;
        return winMessage.textContent = 'You win! Rock beats Scissors!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore = computerScore + 1;
        return winMessage.textContent = 'You loose! Scissors beats Rock!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore = playerScore + 1;
        return winMessage.textContent = 'You win! Scissors beats paper!';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore = computerScore + 1;
        return winMessage.textContent = 'You loose! Rock beats Scissors!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore = playerScore + 1;
        return winMessage.textContent = 'You Win! Paper beats Rock!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore = computerScore + 1;
        return winMessage.textContent = 'You loose! Scissors beats Paper!';
    }
}
function updateScore(){
    return scoreGeneral.textContent = `YOU:${playerScore} PC:${computerScore}`
}

function checkWinner() {
    if (playerScore === 5) {
        return winMessage.textContent = 'The winner of the game is you!'
    } else if (computerScore === 5) {
        return winMessage.textContent = 'The winner is the computer! You loose! Better luck next time!'
    } 
}

function resetGame(){
    if(playerScore == 5 || computerScore == 5){
    playerScore = 0;
    computerScore = 0;
    computerSelection = '';
    playerSelection = '';
    }
}
//INTERFACE DO JOGO
const playerChoice = document.querySelector(".playerChoice")
const computerChoice = document.querySelector(".computerChoice")
const rockButton = document.querySelector('.rock')
const scoreGeneral = document.querySelector(".scoreGeneral")
const paperButton = document.querySelector(".paper")
const scissorsButton = document.querySelector('.scissors')
const winMessage = document.querySelector(".winMessage")

rockButton.addEventListener('click', () => {
    playerSelection = 'rock' // Jogador seleciona através do click
    computerSelection = computerPlay() // o PC escolhe
    updateChoiceComputer() //Atualiza a pagina e mostra o score do computador
    updateChoicePlayer()   //Atualiza a pagina e mostra o score do jogador
    round(playerSelection,computerSelection) // Joga o round
    checkWinner() //Checa quem é o vencedor
    updateScore() //Atualiza o placar
    resetGame() // reseta o jogo caso tenha um ganhador
})

paperButton.addEventListener('click', () => {
    playerSelection = 'paper'
    computerSelection = computerPlay()
    updateChoiceComputer() 
    updateChoicePlayer()   
    round(playerSelection,computerSelection) 
    checkWinner() 
    updateScore() 
    resetGame()
})

scissorsButton.addEventListener('click', () => {
    playerSelection = 'scissors' 
    computerSelection = computerPlay() 
    updateChoiceComputer() 
    updateChoicePlayer()   
    round(playerSelection,computerSelection) 
    checkWinner() 
    updateScore() 
    resetGame()

})

