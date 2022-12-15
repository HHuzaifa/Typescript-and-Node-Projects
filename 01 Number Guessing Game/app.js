#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
// callPaused function for displaying message
function pausedStart() {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
}
// actual display message for greeting the user
async function displayMessage() {
    let message = chalkAnimation.karaoke("THE GAME HAS STARTED");
    await pausedStart();
    console.log(chalk.green(message));
}
//displayMessage();
// This is the player's life
var playerLife = 3;
async function askUser() {
    let randomNumber = Math.floor(Math.random() * 5 + 1);
    console.log(chalk.yellowBright(`You have ${playerLife} lives left.`));
    do {
        playerLife--;
        var qRepeat = await inquirer
            .prompt([
            {
                type: "number",
                name: "user_input",
                message: "Enter any number from 1 to 5",
            }
        ]);
        console.log(qRepeat);
        if (qRepeat.user_input == randomNumber) {
            console.log(chalk.green("Congratulation ,your guess is right!"));
        }
        else if (qRepeat.user_input < randomNumber) {
            console.log(chalk.red(`Nope, your number ${qRepeat.user_input} is less than guess number.`));
        }
        else if (qRepeat.user_input > randomNumber) {
            console.log(chalk.red(`Nope, your number ${qRepeat.user_input} is higher than guess number.`));
        }
        ;
    } while (playerLife > 0 && randomNumber !== qRepeat.user_input);
    if (playerLife == 0 && randomNumber !== qRepeat.user_input) {
        console.log(chalk.bgRedBright("GAME OVER!!!"));
    }
}
//askUser();
async function startAgain() {
    do {
        playerLife = 3;
        await askUser();
        var restart = await inquirer.prompt([
            {
                type: "input",
                name: "user_yn",
                message: `Do you want to play again?: Press Y or N\
            Press Y or N`
            }
        ]);
    } while (restart.user_yn === "y" || restart.user_yn === "Y" || restart.user_yn === "yes" || restart.user_yn === "YES");
}
startAgain();
