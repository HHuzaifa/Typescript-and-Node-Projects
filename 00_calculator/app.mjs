#!/usr/bin/node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const pausedStart = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
};
async function displayMessage() {
    let message = chalkAnimation.karaoke("Calculator Started!!!");
    await pausedStart();
    console.log(chalk.yellow(`
    _______________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    `));
    message.stop();
}
await displayMessage();
async function askForNumInput() {
    await inquirer
        .prompt([
        {
            type: "list",
            name: "Operators",
            message: "Enter the desired operation: ",
            choices: ["Add", "Subtract", "Multiply", "Divide"]
        },
        {
            type: "number",
            name: "Number1",
            message: "Enter the first number: "
        },
        {
            type: "number",
            name: "Number2",
            message: "Enter the second number: "
        }
    ])
        .then((answers) => {
        if (answers.Operators === "Add") {
            console.log(chalk.blue(`Result of addition is: ${answers.Number1 + answers.Number2}`));
        }
        else if (answers.Operators === "Subtract") {
            console.log(chalk.blue(`Result of subtraction is: ${answers.Number1 - answers.Number2}`));
        }
        else if (answers.Operators === "Multiply") {
            console.log(chalk.blue(`Result of multiplication is: ${answers.Number1 * answers.Number2}`));
        }
        else if (answers.Operators === "Divide") {
            console.log(chalk.blue(`Result of division is: ${answers.Number1 / answers.Number2}`));
        }
    });
}
;
async function repeatCalcLogic() {
    do {
        await askForNumInput();
        var continuity = await inquirer
            .prompt({
            type: "input",
            name: "repeat",
            message: "Press Y to continue and N to end the calculation: "
        });
    } while (continuity.repeat === "Y" || continuity.repeat === "y" || continuity.repeat === "yes" || continuity.repeat === "Yes" ||
        continuity.repeat === "YES");
}
repeatCalcLogic();
