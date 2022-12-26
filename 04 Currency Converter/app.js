#! /usr/bin/env node
import inquirer from "inquirer";
var currenciesAndValues = {
    USD: {
        GBP: 0.83,
        PKR: 225.50,
        RUB: 70.25,
        EUR: 0.94,
        JPY: 132.82,
        CNY: 6.99,
        SAR: 3.76,
        USD: 1
    },
    GBP: {
        PKR: 271.84,
        RUB: 84.73,
        EUR: 1.13,
        JPY: 160.11,
        CNY: 8.43,
        SAR: 4.53,
        USD: 1.21,
        GBP: 1
    },
    PKR: {
        PKR: 1,
        RUB: 0.31,
        EUR: 0.0042,
        JPY: 0.59,
        CNY: 0.031,
        SAR: 0.017,
        USD: 0.0044,
        GBP: 0.0037
    },
    RUB: {
        PKR: 3.21,
        RUB: 1,
        EUR: 0.013,
        JPY: 1.89,
        CNY: 0.099,
        SAR: 0.054,
        USD: 0.014,
        GBP: 0.012
    },
    EUR: {
        PKR: 239.33,
        RUB: 74.56,
        EUR: 1,
        JPY: 141.65,
        CNY: 7.42,
        SAR: 3.99,
        USD: 1.06,
        GBP: 0.88
    },
    JPY: {
        PKR: 1.70,
        RUB: 0.53,
        EUR: 0.0071,
        JPY: 1,
        CNY: 0.053,
        SAR: 0.028,
        USD: 0.0075,
        GBP: 0.0062
    },
    CNY: {
        PKR: 32.26,
        RUB: 9.94,
        EUR: 0.13,
        JPY: 19.00,
        CNY: 1,
        SAR: 0.54,
        USD: 0.14,
        GBP: 0.12
    },
    SAR: {
        PKR: 59.97,
        RUB: 18.68,
        EUR: 0.25,
        JPY: 35.32,
        CNY: 1.86,
        SAR: 1,
        USD: 0.27,
        GBP: 0.22
    }
};
async function quit() {
    const userInput = await inquirer.prompt([
        {
            name: "quitOrNot",
            type: "confirm",
            message: "Do you want to convert some currency again?"
        }
    ]);
}
async function currencyConverter() {
    const userInput = await inquirer.prompt([
        {
            name: "firstCurrency",
            type: "list",
            message: "Select the currency you want to convert from:",
            choices: ["USD", "GBP", "SAR", "CNY", "JPY", "EUR", "RUB", "PKR"]
        },
        {
            name: "secondCurrency",
            type: "list",
            message: "Select the currency you want to convert to:",
            choices: ["USD", "GBP", "SAR", "CNY", "JPY", "EUR", "RUB", "PKR"]
        },
        {
            name: "amount",
            type: "number",
            message: "Enter the amount here:"
        }
    ]);
    const { firstCurrency, secondCurrency, amount } = userInput;
    let converted = undefined;
    // from usd
    if (firstCurrency === "USD" && secondCurrency === "USD") {
        converted = currenciesAndValues.USD.USD * amount;
        console.log(converted);
    }
    else if (firstCurrency === "USD" && secondCurrency === "GBP") {
        converted = currenciesAndValues.USD.GBP * amount;
        console.log(converted);
    }
    else if (firstCurrency === "USD" && secondCurrency === "SAR") {
        converted = currenciesAndValues.USD.SAR * amount;
        console.log(converted);
    }
    else if (firstCurrency === "USD" && secondCurrency === "CNY") {
        converted = currenciesAndValues.USD.CNY * amount;
        console.log(converted);
    }
    else if (firstCurrency === "USD" && secondCurrency === "JPY") {
        converted = currenciesAndValues.USD.JPY * amount;
        console.log(converted);
    }
    else if (firstCurrency === "USD" && secondCurrency === "EUR") {
        converted = currenciesAndValues.USD.EUR * amount;
        console.log(converted);
    }
    else if (firstCurrency === "USD" && secondCurrency === "RUB") {
        converted = currenciesAndValues.USD.RUB * amount;
        console.log(converted);
    }
    else if (firstCurrency === "USD" && secondCurrency === "PKR") {
        converted = currenciesAndValues.USD.PKR * amount;
        console.log(converted);
    }
}
currencyConverter();
