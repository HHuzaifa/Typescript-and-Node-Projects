import inquirer from "inquirer";

async function cashTransfer(balance: number) {
    const cTransfer = await inquirer.prompt([
        {
            name: "accountNumber",
            type: "number",
            message: "Enter the account number:\n"
        },
        {
            name: "amount",
            type: "number",
            message: "Please enter the amount:\n"
        }
    ]);
    balance -= cTransfer.amount
    return balance
}

export default cashTransfer;
