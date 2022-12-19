import inquirer from "inquirer";
import cashWithdraw from "./cashWithdrawal.js";
import cashDeposit from "./cashDeposit.js";
import cashTransfer from "./cashTransfer.js";
async function anotherTransaction() {
    const transaction = await inquirer.prompt([
        {
            name: "aTransaction",
            type: "list",
            choices: ["Yes", "No"],
            message: "Do you want to perform another transaction?\n"
        }
    ]);
    return transaction.aTransaction;
}
async function mainScreen(balance) {
    do {
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
                console.log(`Your current balance is ${balance}.`);
                break;
            case "Cash Deposit":
                balance = await cashDeposit(balance);
                console.log(`Transaction successful, new balance is ${balance}.`);
                break;
            case "Cash Withdraw":
                balance = await cashWithdraw(balance);
                console.log(`Transaction successful, new balance is ${balance}.`);
                break;
            case "Transfer Money":
                balance = await cashTransfer(balance);
                console.log(`Transaction successful, new balance is ${balance}.`);
                break;
            case "Utility Bill":
                console.log("Bill");
                break;
            case "Exit":
                break;
        }
        var aNotherTraction = await anotherTransaction();
    } while (aNotherTraction === "Yes");
}
export default mainScreen;
