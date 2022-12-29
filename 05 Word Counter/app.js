#! /usr/bin/env node
import inquirer from "inquirer";
const userInput = await inquirer.prompt([
    {
        name: "paragraphInput",
        type: "input",
        message: "\nPlease enter your paragraph here:\n"
    }
]);
const savedSplitted = userInput.paragraphInput.trim().split(" ");
console.log(`There are ${savedSplitted.length} number of words in your paragraph!`);
