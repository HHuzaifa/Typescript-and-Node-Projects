import inquirer from "inquirer";
async function mainScreen(balance) {
  const askOptions = await inquirer.prompt([
    {
      name: "menu",
      type: "list",
      choices: [
        "Balance Inquiry",
        "Cash Deposit",
        "Cash Widthdraw",
        "Transfer Money",
        "Utility Bill",
        "Exit",
      ],
      message: "Please select the action you want to perform:\n",
    },
  ]);
  switch (askOptions.menu) {
    case "Balance Inquiry":
      console.log(`Your current balance is ${balance}`);
      break;
    case "Cash Deposit":
      console.log("Deposit");
      break;
    case "Cash Widthdraw":
      console.log("Widthdraw");
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
