#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
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
async function quit(currencyConverter) {
    const userInput = await inquirer.prompt([
        {
            name: "quitOrNot",
            type: "confirm",
            message: chalk.bold.blue("\nDo you want to convert some currency?\n")
        }
    ]);
    if (userInput.quitOrNot === true) {
        return currencyConverter();
    }
}
async function currencyConverter() {
    const userInput = await inquirer.prompt([
        {
            name: "firstCurrency",
            type: "list",
            message: chalk.bold.blue("\nSelect the currency you want to convert from:\n\t"),
            choices: ["USD", "GBP", "SAR", "CNY", "JPY", "EUR", "RUB", "PKR"]
        },
        {
            name: "secondCurrency",
            type: "list",
            message: chalk.bold.blue("\nSelect the currency you want to convert to:\n\t"),
            choices: ["USD", "GBP", "SAR", "CNY", "JPY", "EUR", "RUB", "PKR"]
        },
        {
            name: "amount",
            type: "number",
            message: chalk.bold.blue("\nEnter the amount here:\n\t")
        },
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
    // from gbp
    else if (firstCurrency === "GBP" && secondCurrency === "USD") {
        converted = currenciesAndValues.USD.USD * amount;
        console.log(converted);
    }
    else if (firstCurrency === "GBP" && secondCurrency === "GBP") {
        converted = currenciesAndValues.USD.GBP * amount;
        console.log(converted);
    }
    else if (firstCurrency === "GBP" && secondCurrency === "SAR") {
        converted = currenciesAndValues.USD.SAR * amount;
        console.log(converted);
    }
    else if (firstCurrency === "GBP" && secondCurrency === "CNY") {
        converted = currenciesAndValues.USD.CNY * amount;
        console.log(converted);
    }
    else if (firstCurrency === "GBP" && secondCurrency === "JPY") {
        converted = currenciesAndValues.USD.JPY * amount;
        console.log(converted);
    }
    else if (firstCurrency === "GBP" && secondCurrency === "EUR") {
        converted = currenciesAndValues.USD.EUR * amount;
        console.log(converted);
    }
    else if (firstCurrency === "GBP" && secondCurrency === "RUB") {
        converted = currenciesAndValues.USD.RUB * amount;
        console.log(converted);
    }
    else if (firstCurrency === "GBP" && secondCurrency === "PKR") {
        converted = currenciesAndValues.USD.PKR * amount;
        console.log(converted);
    }
    // from pkr
    else if (firstCurrency === "PKR" && secondCurrency === "USD") {
        converted = currenciesAndValues.USD.USD * amount;
        console.log(converted);
    }
    else if (firstCurrency === "PKR" && secondCurrency === "GBP") {
        converted = currenciesAndValues.USD.GBP * amount;
        console.log(converted);
    }
    else if (firstCurrency === "PKR" && secondCurrency === "SAR") {
        converted = currenciesAndValues.USD.SAR * amount;
        console.log(converted);
    }
    else if (firstCurrency === "PKR" && secondCurrency === "CNY") {
        converted = currenciesAndValues.USD.CNY * amount;
        console.log(converted);
    }
    else if (firstCurrency === "PKR" && secondCurrency === "JPY") {
        converted = currenciesAndValues.USD.JPY * amount;
        console.log(converted);
    }
    else if (firstCurrency === "PKR" && secondCurrency === "EUR") {
        converted = currenciesAndValues.USD.EUR * amount;
        console.log(converted);
    }
    else if (firstCurrency === "PKR" && secondCurrency === "RUB") {
        converted = currenciesAndValues.USD.RUB * amount;
        console.log(converted);
    }
    else if (firstCurrency === "PKR" && secondCurrency === "PKR") {
        converted = currenciesAndValues.USD.PKR * amount;
        console.log(converted);
    }
    // from RUB
    else if (firstCurrency === "RUB" && secondCurrency === "USD") {
        converted = currenciesAndValues.USD.USD * amount;
        console.log(converted);
    }
    else if (firstCurrency === "RUB" && secondCurrency === "GBP") {
        converted = currenciesAndValues.USD.GBP * amount;
        console.log(converted);
    }
    else if (firstCurrency === "RUB" && secondCurrency === "SAR") {
        converted = currenciesAndValues.USD.SAR * amount;
        console.log(converted);
    }
    else if (firstCurrency === "RUB" && secondCurrency === "CNY") {
        converted = currenciesAndValues.USD.CNY * amount;
        console.log(converted);
    }
    else if (firstCurrency === "RUB" && secondCurrency === "JPY") {
        converted = currenciesAndValues.USD.JPY * amount;
        console.log(converted);
    }
    else if (firstCurrency === "RUB" && secondCurrency === "EUR") {
        converted = currenciesAndValues.USD.EUR * amount;
        console.log(converted);
    }
    else if (firstCurrency === "RUB" && secondCurrency === "RUB") {
        converted = currenciesAndValues.USD.RUB * amount;
        console.log(converted);
    }
    else if (firstCurrency === "RUB" && secondCurrency === "PKR") {
        converted = currenciesAndValues.USD.PKR * amount;
        console.log(converted);
    }
    // from EUR
    else if (firstCurrency === "EUR" && secondCurrency === "USD") {
        converted = currenciesAndValues.USD.USD * amount;
        console.log(converted);
    }
    else if (firstCurrency === "EUR" && secondCurrency === "GBP") {
        converted = currenciesAndValues.USD.GBP * amount;
        console.log(converted);
    }
    else if (firstCurrency === "EUR" && secondCurrency === "SAR") {
        converted = currenciesAndValues.USD.SAR * amount;
        console.log(converted);
    }
    else if (firstCurrency === "EUR" && secondCurrency === "CNY") {
        converted = currenciesAndValues.USD.CNY * amount;
        console.log(converted);
    }
    else if (firstCurrency === "EUR" && secondCurrency === "JPY") {
        converted = currenciesAndValues.USD.JPY * amount;
        console.log(converted);
    }
    else if (firstCurrency === "EUR" && secondCurrency === "EUR") {
        converted = currenciesAndValues.USD.EUR * amount;
        console.log(converted);
    }
    else if (firstCurrency === "EUR" && secondCurrency === "RUB") {
        converted = currenciesAndValues.USD.RUB * amount;
        console.log(converted);
    }
    else if (firstCurrency === "EUR" && secondCurrency === "PKR") {
        converted = currenciesAndValues.USD.PKR * amount;
        console.log(converted);
    }
    // from JPY
    else if (firstCurrency === "JPY" && secondCurrency === "USD") {
        converted = currenciesAndValues.USD.USD * amount;
        console.log(converted);
    }
    else if (firstCurrency === "JPY" && secondCurrency === "GBP") {
        converted = currenciesAndValues.USD.GBP * amount;
        console.log(converted);
    }
    else if (firstCurrency === "JPY" && secondCurrency === "SAR") {
        converted = currenciesAndValues.USD.SAR * amount;
        console.log(converted);
    }
    else if (firstCurrency === "JPY" && secondCurrency === "CNY") {
        converted = currenciesAndValues.USD.CNY * amount;
        console.log(converted);
    }
    else if (firstCurrency === "JPY" && secondCurrency === "JPY") {
        converted = currenciesAndValues.USD.JPY * amount;
        console.log(converted);
    }
    else if (firstCurrency === "JPY" && secondCurrency === "EUR") {
        converted = currenciesAndValues.USD.EUR * amount;
        console.log(converted);
    }
    else if (firstCurrency === "JPY" && secondCurrency === "RUB") {
        converted = currenciesAndValues.USD.RUB * amount;
        console.log(converted);
    }
    else if (firstCurrency === "JPY" && secondCurrency === "PKR") {
        converted = currenciesAndValues.USD.PKR * amount;
        console.log(converted);
    }
    // from CNY
    else if (firstCurrency === "CNY" && secondCurrency === "USD") {
        converted = currenciesAndValues.USD.USD * amount;
        console.log(converted);
    }
    else if (firstCurrency === "CNY" && secondCurrency === "GBP") {
        converted = currenciesAndValues.USD.GBP * amount;
        console.log(converted);
    }
    else if (firstCurrency === "CNY" && secondCurrency === "SAR") {
        converted = currenciesAndValues.USD.SAR * amount;
        console.log(converted);
    }
    else if (firstCurrency === "CNY" && secondCurrency === "CNY") {
        converted = currenciesAndValues.USD.CNY * amount;
        console.log(converted);
    }
    else if (firstCurrency === "CNY" && secondCurrency === "JPY") {
        converted = currenciesAndValues.USD.JPY * amount;
        console.log(converted);
    }
    else if (firstCurrency === "CNY" && secondCurrency === "EUR") {
        converted = currenciesAndValues.USD.EUR * amount;
        console.log(converted);
    }
    else if (firstCurrency === "CNY" && secondCurrency === "RUB") {
        converted = currenciesAndValues.USD.RUB * amount;
        console.log(converted);
    }
    else if (firstCurrency === "CNY" && secondCurrency === "PKR") {
        converted = currenciesAndValues.USD.PKR * amount;
        console.log(converted);
    }
    // from SAR
    else if (firstCurrency === "SAR" && secondCurrency === "USD") {
        converted = currenciesAndValues.USD.USD * amount;
        console.log(converted);
    }
    else if (firstCurrency === "SAR" && secondCurrency === "GBP") {
        converted = currenciesAndValues.USD.GBP * amount;
        console.log(converted);
    }
    else if (firstCurrency === "SAR" && secondCurrency === "SAR") {
        converted = currenciesAndValues.USD.SAR * amount;
        console.log(converted);
    }
    else if (firstCurrency === "SAR" && secondCurrency === "CNY") {
        converted = currenciesAndValues.USD.CNY * amount;
        console.log(converted);
    }
    else if (firstCurrency === "SAR" && secondCurrency === "JPY") {
        converted = currenciesAndValues.USD.JPY * amount;
        console.log(converted);
    }
    else if (firstCurrency === "SAR" && secondCurrency === "EUR") {
        converted = currenciesAndValues.USD.EUR * amount;
        console.log(converted);
    }
    else if (firstCurrency === "SAR" && secondCurrency === "RUB") {
        converted = currenciesAndValues.USD.RUB * amount;
        console.log(converted);
    }
    else if (firstCurrency === "SAR" && secondCurrency === "PKR") {
        converted = currenciesAndValues.USD.PKR * amount;
        console.log(converted);
    }
    quit(currencyConverter);
}
quit(currencyConverter);
