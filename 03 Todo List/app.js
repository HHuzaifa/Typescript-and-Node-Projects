#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue("\n\n\n\t\tTODO APP\n"));
let toDoS = [];
let loop = true;
while (loop) {
    const userInput = await inquirer.prompt([
        {
            name: "toDo",
            type: "input",
            message: chalk.yellowBright("Enter the task:\n")
        },
        {
            name: "addAnotherToDo",
            type: "confirm",
            message: chalk.yellowBright("Wanna add another task?\n"),
            default: false
        }
    ]);
    const { toDo, addAnotherToDo } = userInput;
    loop = addAnotherToDo;
    if (toDo) {
        toDoS.push(toDo);
    }
    else {
        console.log(chalk.red("Please enter a valid input!"));
    }
}
if (toDoS.length > 0) {
    console.log(chalk.blue("Your ToDo List Below:\n"));
    toDoS.forEach(toDoS => {
        console.log(chalk.green(toDoS));
    });
}
else {
    console.log(chalk.yellow("No tasks found!"));
}
