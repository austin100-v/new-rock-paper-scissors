const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const computerImg = document.querySelector("#computerImg")
const para = document.querySelector(".output-text");

function updateComputerImage (choice) {
    if (choice === "rock") {
        computerImg.src = "assets/hand_10547351.png";
    } else if (choice === "paper") {
        computerImg.src = "assets/hand_16065539.png";
    } else {
        computerImg.src = "assets/scissors_11247232.png";
    }
}

function getComputerChoice() {
    let any = Math.random();

    if (any <= 0.33) {
        return "rock";
    } else if (any <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

rockBtn.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    updateComputerImage(computerSelection);

    if (computerSelection === "rock") {
        para.textContent = "Its a tie! The computer picked Rock";
    } else if (computerSelection === "paper") {
        para.textContent = "You Lost! Paper covers Rock";
    } else {
        para.textContent = "You Won! Rock beats Scissors";
    }
});

paperBtn.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    updateComputerImage(computerSelection);

    if (computerSelection === "paper") {
        para.textContent = "Its a tie! The computer picked Paper";
    } else if (computerSelection === "rock") {
        para.textContent = "You Won! Paper covers Rock";
    } else {
        para.textContent = "You Lost! Scissors cuts Paper";
    }
});

scissorsBtn.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    updateComputerImage(computerSelection);

    if (computerSelection === "scissors") {
        para.textContent = "Its a tie! The computer picked scissors";
    } else if (computerSelection === "rock") {
        para.textContent = "You Lost! Rock beats Scissors";
    } else {
        para.textContent = "You Won! Scissors cuts Paper";
    }
});
