#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
async function askQuestions() {
    var score = 0;
    console.log(chalk.blue("Quiz Started!"));
    const userInput = await inquirer.prompt([
        {
            name: "question1",
            type: "list",
            choices: ["milky Way Galaxy", "andromeda Galaxy", "draco Dwarf Galaxy"],
            message: chalk.green("What is the name of the galaxy we live in?")
        },
        {
            name: "question2",
            type: "list",
            choices: ["happy", "bad", "anger"],
            message: chalk.green("What is the opposite of good?")
        },
        {
            name: "question3",
            type: "list",
            choices: ["foot", "finger", "heart"],
            message: chalk.green("Select the vital organ of a human body.")
        },
        {
            name: "question4",
            type: "list",
            choices: ["jupyter", "earth", "venus"],
            message: chalk.green("What is the planet's name we live on?")
        },
        {
            name: "question5",
            type: "list",
            choices: ["moon", "saturn", "sun"],
            message: chalk.green("What we see in the sky at night?")
        },
        {
            name: "quizAgain",
            type: "list",
            choices: ["Yes", "No"],
            message: chalk.yellow("Do you wanna take the quiz again?")
        }
    ]);
    switch (userInput.question1) {
        case "milky Way Galaxy":
            score++;
            break;
    }
    switch (userInput.question2) {
        case "bad":
            score++;
            break;
    }
    switch (userInput.question3) {
        case "heart":
            score++;
            break;
    }
    switch (userInput.question4) {
        case "earth":
            score++;
            break;
    }
    switch (userInput.question5) {
        case "moon":
            score++;
            break;
    }
    console.log(chalk.blue(`You scored ${score} out of 5.`));
    switch (userInput.quizAgain) {
        case "Yes":
            askQuestions();
            break;
    }
}
askQuestions();
