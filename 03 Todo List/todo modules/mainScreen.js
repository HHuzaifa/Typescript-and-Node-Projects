import inquirer from "inquirer";
import addTask from "./addTask.js";
var taskList = [];
async function mainScreen() {
    //do {
    const userInput = await inquirer.prompt([
        {
            name: "optionsList",
            type: "list",
            choices: ["addTask", "removeTask", "updateTask", "exit"]
        }
    ]);
    switch (userInput.optionsList) {
        case "addTask":
            addTask(taskList);
            console.log("Your task has been successfully");
        case "removeTask":
            console.log("addTask");
        case "updateTask":
            console.log("addTask");
        case "exit":
    }
}
//while ()
//}
export default mainScreen;
