#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk";



async function getAmount1stCurrency2ndCurrency() {
    const userInput = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "Enter the amount:\n"
        },
        {
            name: "1stCurrency",
            type: "list",
            choices: ["USD", "GBP", "EUR", "PKR", "INR", "RUB", "CNY"],
            message: "Enter the currency you want to convert from:\n"
        },
        {
            name: "2ndCurrency",
            type: "list",
            choices: ["USD", "GBP", "EUR", "PKR", "INR", "RUB", "CNY"],
            message: "Enter the currency you want to convert to:\n"
        }
    ]);
};

async function converter(getAmount1stCurrency2ndCurrency: Function) {
    switch()
}