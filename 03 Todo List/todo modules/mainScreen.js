import inquirer from "inquirer";
import addTask from "./addTask.js";
var taskList = ["huzaifa", "hamza", "hassan"];
async function mainScreen() {
    //do {
    const userInput = await inquirer.prompt([
        {
            name: "optionsList",
            type: "list",
            choices: ["displayTasks", "addTask", "removeTask", "updateTask", "exit"]
        }
    ]);
    switch (userInput.optionsList) {
        case "displayTasks":
            for (let i = 0; i < taskList.length; i++) {
                console.log(taskList[i]);
            }
        //console.log(taskList)
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
