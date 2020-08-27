console.log("Conected");

// Rock, Paper, Scissor. 
// Game Rules
/* 
    The computer wins if it choose paper and the user chooses rock
    The computer wins if it chooses rock and the users chooses scissors
    The computer wins if it chooses scissors an the user chooses paper

*/
let computer_choice;
let user_choice;
let winner = "";
let random;
// 3 options
let options = ["paper", "rock", "scissors"];
// random Number fn
function getRandomNumber() {
    random = Math.floor(Math.random() * 3)
    let computer_choice = random;
    playGame(computer_choice);
    return computer_choice;

}
function playGame(computer_choice) {

    options = [computer_choice];
    console.log("La opcion es " + options);
    user_choice = parseInt(prompt("Choose an choose an option 0 PAPER , 1 ROCK , 2 SCISSORS"));
    console.log(user_choice);
    if (computer_choice == user_choice) {
        document.getElementById("result").innerHTML = `There is a tie ${options = [computer_choice]}`;
    } else {
        if (computer_choice == 0 && user_choice == 1) {

            winner = "COMPUTER"
            document.getElementById("result").innerHTML = `The winner is ${winner}  with ${options = [computer_choice]}`;
        } else if (computer_choice == 1 && user_choice == 2) {

            winner = "COMPUTER"
            document.getElementById("result").innerHTML = `The Winner is ${winner}  with ${options = [computer_choice]}`;
        } else if (computer_choice == 2 && user_choice == 0) {

            winner = "COMPUTER"
            document.getElementById("result").innerHTML = `The Winner is ${winner} with ${options = [computer_choice]}`;

        } else {
            winner = "USER"
            document.getElementById("result").innerHTML = `The Winner is ${winner}  with ${options = [computer_choice]}`;
        }
    }
}

