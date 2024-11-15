console.log("Hola mundo")

function getComputerChoice() {
    let choice;
    if (Math.random() <= 0.33) {
        choice = "Rock";
    } else if (Math.random() > 0.33 && Math.random() < 0.66) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    return choice
}

// Function para recibir el input del usuario
function getHumanChoice() {
    // bucle para asegurarse de que el valor sea correcto
    while (true) {
        let human_choice = prompt("Whats your choice? (R)ock, (P)aper or (S)cissors")

        if (human_choice === "R" || human_choice === "Rock") {
            return "Rock"
        } else if (human_choice === "S" || human_choice === "Scissors") {
            return "Scissors"
        } else if (human_choice === "p" || human_choice === "Paper") {
            return "Paper"
        } else alert("Invalid choice, please try again.")
    }
}


console.log(getComputerChoice())