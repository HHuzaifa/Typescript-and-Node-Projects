import inquirer from "inquirer";
async function todoMain() {
    const userInput = inquirer.prompt([
        {
            name: "taskOptions",
            type: "list",
            choices: [""]
        }
    ]);
}
