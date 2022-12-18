import inquirer from "inquirer";
import users from "./users.js";
import cashWithdraw from "./cashWithdrawal.js";


async function mainScreen(balance: number) {
    const userInput = await inquirer.prompt([
        {
            name: "menu",
            type: "list",
            choices: ["Balance Inquiry", "Cash Deposit", "Cash Withdraw", "Transfer Money", "Utility Bill", "Exit"],
            message: "Please select the action you want to perform:\n"
        }
    ]);

    switch (userInput.menu) {
        case "Balance Inquiry":
            console.log(`Your current balance is $${balance}.`)
            break

        case "Cash Deposit":
            console.log("Deposit")
            break

        case "Cash Withdraw":
            cashWithdraw(balance)
            break

        case "Transfer Money":
            console.log("Transfer")
            break

        case "Utility Bill":
            console.log("Bill")
            break

        case "Exit":
            break
    }
}

export default mainScreen;