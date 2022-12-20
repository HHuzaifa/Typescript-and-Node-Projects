import inquirer from "inquirer";
import users from "./users.js";
import cashWithdraw from "./cashWithdrawal.js";
import cashDeposit from "./cashDeposit.js";
import cashTransfer from "./cashTransfer.js";
import utilityBills from "./utilityBills.js";
import chalk from "chalk";

async function anotherTransaction() {
    const transaction = await inquirer.prompt([
        {
            name: "aTransaction",
            type: "list",
            choices: ["Yes", "No"],
            message: chalk.blue("\nDo you want to perform another transaction?\n")
        }
    ])
    return transaction.aTransaction
}


async function mainScreen(balance: number) {
    do {
        const userInput = await inquirer.prompt([
            {
                name: "menu",
                type: "list",
                choices: ["Balance Inquiry", "Cash Deposit", "Cash Withdraw", "Transfer Money", "Utility Bill", "Exit"],
                message: chalk.blue("\nPlease select the action you want to perform:\n")
            }
        ]);

        switch (userInput.menu) {
            case "Balance Inquiry":
                console.log(chalk.yellow(`\nYour current balance is ${balance}.\n`))
                break

            case "Cash Deposit":
                balance = await cashDeposit(balance)
                console.log(chalk.green(`\nTransaction successful, new balance is ${balance}.\n`))
                break

            case "Cash Withdraw":
                balance = await cashWithdraw(balance)
                console.log(chalk.green(`\nTransaction successful, new balance is ${balance}.\n`))
                break

            case "Transfer Money":
                balance = await cashTransfer(balance)
                console.log(chalk.green(`\nTransaction successful, new balance is ${balance}.\n`))
                break

            case "Utility Bill":
                balance = await utilityBills(balance)
                console.log(chalk.green(`\nTransaction successful, new balance is ${balance}.\n`))
                break

            case "Exit":
                aNotherTraction = "No"
                break
        }
        if (userInput.menu !== "Exit") {
            var aNotherTraction = await anotherTransaction()
        }
        if (aNotherTraction === "No") {
            console.log(chalk.greenBright("\nThank you for using this service, please come back again.\n"))
        }
    } while (aNotherTraction === "Yes")
}

export default mainScreen;


