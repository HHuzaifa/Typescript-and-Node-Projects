import inquirer from "inquirer";
import cashWithdraw from "./cashWithdrawal.js";
import cashDeposit from "./cashDeposit.js";
async function mainScreen(balance) {
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
            console.log(`Your current balance is $${balance}.`);
            break;
        case "Cash Deposit":
            balance = await cashDeposit(balance);
            console.log(`Transaction successful, new balance is $${balance}.`);
            break;
        case "Cash Withdraw":
            balance = await cashWithdraw(balance);
            console.log(`Transaction successful, new balance is $${balance}.`);
            break;
        case "Transfer Money":
            console.log("Transfer");
            break;
        case "Utility Bill":
            console.log("Bill");
            break;
        case "Exit":
            break;
    }
}
export default mainScreen;
