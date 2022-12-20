import inquirer from "inquirer";
const electricityBill = Math.ceil(Math.random() * 1000 + 1);
const gasBill = Math.ceil(Math.random() * 1000 + 1);
const internetBill = Math.ceil(Math.random() * 1000 + 1);
async function utilityBills(balance) {
    const userInput = await inquirer.prompt([
        {
            name: "billType",
            type: "list",
            message: "Please enter, which bill you want to pay:\n",
            choices: ["electricityBill", "gasBill", "internetBill"]
        }
    ]);
    if (userInput.billType == "electricityBill") {
        console.log(`Your bill amount is ${electricityBill}.`);
        balance -= electricityBill;
    }
    else if (userInput.billType == "gasBill") {
        console.log(`Your bill amount is ${gasBill}.`);
        balance -= gasBill;
    }
    else if (userInput.billType == "internetBill") {
        console.log(`Your bill amount is ${internetBill}.`);
        balance -= internetBill;
    }
    return balance;
}
export default utilityBills;
