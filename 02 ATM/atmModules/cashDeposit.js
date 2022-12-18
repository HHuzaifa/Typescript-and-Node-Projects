import inquirer from "inquirer";
async function cashDeposit(balance) {
    const userInput = await inquirer.prompt([
        {
            name: "deposit",
            type: "number",
            message: "Enter the amount you want to deposit:\n"
        }
    ]);
    balance += userInput.deposit;
    return balance;
}
export default cashDeposit;
