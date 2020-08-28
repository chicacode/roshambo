console.log("Conected");

// Rock, Paper, Scissor. 
// Game Rules
/* 
    The computer wins if it choose paper and the user chooses rock
    The computer wins if it chooses rock and the users chooses scissors
    The computer wins if it chooses scissors an the user chooses paper

*/
let user_choice;
let winner = "";
let random, userPoints = 0, computerPoints = 0;
let userScoreDiv = document.getElementById("user-score");
let compuScoreDiv = document.getElementById("cpu-score");
let butttonRestart = document.getElementById("btn-restart");
// 3 options




// random Number fn
function getRandomNumber() {
    let options = ["paper", "rock", "scissors"];
    random = Math.floor(Math.random() * 3)
    let computer_choice = random; // cambiar nombre a vriable local a random_N
    options[computer_choice]

    playGame(options[computer_choice]);
    return options[computer_choice]; // We return the value of the local variable, not the local variable itself
    // We return the value of the local variable, not the local variable itself
}

function playGame(computer_choice) {
    options = [computer_choice];
    user_choice = prompt("Choose an choose an option paper, rock , scissors");
    user_choice = user_choice.toLowerCase();

    if (user_choice != "paper" && user_choice != "rock" && user_choice != "scissors") {
        document.getElementById("btn-play").style.display = "none";
        document.getElementById("result").innerHTML = `SORRY! YOU CHOOSE AN INVALID OPTION`;
    } else {
        if (computer_choice == user_choice) {
            document.getElementById("btn-play").style.display = "none";
            document.getElementById("result").innerHTML = `There is a tie. Both choose ${options = [computer_choice]}`;
            compuWin();
            userWin();
        } else {
            if (computer_choice == "paper" && user_choice == "rock") {
                winner = "COMPUTER"
                compuWin();
                document.getElementById("btn-play").style.display = "none";
                document.getElementById("result").innerHTML = `The winner is ${winner}  with ${options = [computer_choice]}`;
            } else if (computer_choice == "rock" && user_choice == "scissors") {

                winner = "COMPUTER"
                compuWin();
                document.getElementById("btn-play").style.display = "none";
                document.getElementById("result").innerHTML = `The Winner is ${winner}  with ${options = [computer_choice]}`;
            } else if (computer_choice == "scissors" && user_choice == "paper") {

                winner = "COMPUTER"
                compuWin();
                document.getElementById("btn-play").style.display = "none";
                document.getElementById("result").innerHTML = `The Winner is ${winner} with ${options = [computer_choice]}`;

            } else {
                winner = "USER"
                userWin();
                document.getElementById("btn-play").style.display = "none";
                document.getElementById("result").innerHTML = `The Winner is ${winner}  with ${user_choice}`;
            }
        }
    }
}

function restart() {
    userPoints = 0;
    computerPoints = 0;
    userScoreDiv = userPoints;
    compuScoreDiv = computerPoints;
    document.getElementById("result").innerHTML = "";
    document.getElementById("btn-play").style.display = "block";
}

function userWin() {
    userPoints++
    userScoreDiv.innerHTML = `${userPoints}`;

}
function compuWin() {
    computerPoints++
    compuScoreDiv.innerHTML = `${computerPoints}`;
}
butttonRestart.addEventListener("click", restart);