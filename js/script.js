console.log("Hola mundo")

let human_score = 0;
let computer_score = 0;
let round = 0;

//Funcion para contar rondas
function countRounds() {
    round += 1;
    return round;
}

// Funcion para recibir el input de la máquina
function getComputerChoice() {
    let choice;
    if (Math.random() <= 0.33) {
        choice = "rock";
    } else if (Math.random() > 0.33 && Math.random() < 0.66) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice
}

// Function para recibir el input del usuario
function getHumanChoice() {
    // bucle para asegurarse de que el valor sea correcto
    while (true) {
        let human_choice = prompt("Whats your choice? (R)ock, (P)aper or (S)cissors");
        human_choice = human_choice.toLowerCase();
        if (human_choice === "r" || human_choice === "rock") {
            return "rock"
        } else if (human_choice === "s" || human_choice === "scissors") {
            return "scissors"
        } else if (human_choice === "p" || human_choice === "paper") {
            return "paper"
        } else alert("Invalid choice, please try again.")
    }
}

// Funcion para jugar una ronda
function playRound(human_choice, computer_choice) {
    switch (true) {
        // Tie
        case(human_choice === computer_choice):
            alert("Its a tie!");
            break;
        // You win cases
        case (human_choice === "rock" && computer_choice === "scissors"):
        case (human_choice === "paper" && computer_choice === "rock"):
        case (human_choice === "scissors" && computer_choice === "paper"):
            alert("You win!");
            human_score += 1;
            break;
        // You lose cases
        default:
            alert("You lose!");
            computer_score += 1;
    }
}

// Funcion para saber quien gano
function endGame() {
    if (human_score === 5 || computer_score === 5) {
        if (human_score > computer_score) {
            alert("You won this battle!");
        } else {
            alert("You lose!");
        }
        return true;
    }
    return false;
}

// Funcion para jugar un juego de 5 vidas
function playGame() {
    while (true) {
        countRounds();
        let human_choice = getHumanChoice();
        let computer_choice = getComputerChoice();
        playRound(human_choice, computer_choice);
        console.log("Player score: " + human_score+ ", Computer_score: " + computer_score);
        if (endGame()){
            break
        }
    }
}

playGame();