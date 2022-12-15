#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
// This is a function to display a paused welcome message
function pausedStart() {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
}
async function displayMessage() {
    let message = chalkAnimation.karaoke("THE GAME HAS STARTED");
    await pausedStart();
    console.log(chalk.green(message));
}
displayMessage();
async function askUser() {
    var randomNumber = Math.floor(Math.random() * 5 + 1);
    let qRepeat = await inquirer
        .prompt([
        {
            type: "number",
            name: "user_input",
            message: "Enter any number from 1 to 5",
            // validate: (answers: number) => {
            //     if (isNaN(answers)) {
            //         return chalk.red("Please enter a number!!!")
            //     } else {
            //         return true
            //     }
            // }
        }
    ]);
    console.log(qRepeat);
    if (qRepeat.user_input === randomNumber) {
        console.log(chalk.green("Congratulation ,your guess is right!"));
    }
    else if (qRepeat.user_input < randomNumber) {
        console.log(chalk.yellow(`Nope, your number ${qRepeat.user_input} is less than guess number.`));
    }
    else if (qRepeat.user_input > randomNumber) {
        console.log(chalk.yellow(`Nope, your number ${qRepeat.user_input} is higher than guess number.`));
    }
    ;
}
askUser();
