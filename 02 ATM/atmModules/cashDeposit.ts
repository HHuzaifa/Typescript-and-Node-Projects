import inquirer from "inquirer";
import users from "./users.js";


async function cashDeposit(balance: number) {
    const userInput = await inquirer.prompt([
        {
            name: "deposit",
            type: "number",
            message: "Enter the amount you want to deposit:\n"
        }
    ]);
    balance += userInput.deposit
    return balance
}

export default cashDeposit;