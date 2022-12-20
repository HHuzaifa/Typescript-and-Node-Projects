import { backgroundColorNames } from "chalk";
import inquirer from "inquirer";

async function otherAmount(balance: number) {
    const userInput = await inquirer.prompt([
        {
            name: "otherAmount",
            type: "number",
            message: "Please enter the amount:\n"
        }
    ]);

    if (userInput.otherAmount < balance) {
        balance -= userInput.otherAmount
    }
    else {
        console.log("Your balance is insufficient.")
    }
    return balance
}


async function cashWithdraw(balance: number) {
    const userInput = await inquirer.prompt([
        {
            name: "denominations",
            type: "list",
            choices: ["500", "1000", "5000", "otherAmount"],
            message: "Please enter the amount to withdraw:\n"
        }
    ]);

    switch (userInput.denominations) {
        case "500":
            if (userInput !== "otherAmount" && balance > Number(userInput.denominations)) {
                balance -= 500
                console.log(`Your new balance is: ${balance}.`)
                break

            } else {
                console.log("You have insufficient balance.")
            }

        case "1000":
            if (userInput !== "otherAmount" && balance > Number(userInput.denominations)) {
                balance -= 1000
                console.log(`Your new balance is: ${balance}.`)
                break
            } else {
                console.log("You have insufficient balance.")
            }

        case "5000":
            if (balance > Number(userInput.denominations)) {
                balance -= 5000
                console.log(`Your new balance is: ${balance}.`)
                break
            } else {
                console.log("You have insufficient balance.")
            }

        case "otherAmount":
            balance = await otherAmount(balance)
            break
    }
    return balance;
}


export default cashWithdraw;
