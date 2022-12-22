import inquirer from "inquirer";
import addTask from "./addTask.js";
var taskList = ["huzaifa", "hamza", "hassan"];
// removeTasks.ts
async function runAgain(taskList) {
    const userInput = await inquirer.prompt([
        {
            name: "repeat",
            type: "confirm",
            message: "Do you want to remove another task?"
        }
    ]);
    if (userInput.repeat == "y" || "Y" || "yes" || "YES") {
        removetask(taskList);
    }
}
async function removetask(taskList) {
    const userInput = await inquirer.prompt([
        {
            name: "taskRemoval",
            type: "number",
            message: "Enter the task number to remove the task:\n"
        }
    ]);
    for (let i = 1; taskList.length; i++) {
        if (userInput.taskRemoval.taskRemoval == i) {
            taskList.splice(i);
        }
        else {
            console.log("Please enter a valid task number:\n");
            runAgain(taskList);
        }
    }
    runAgain(taskList);
}
/*async function runRemoveAgain(taskList: Array<string>) {
    const userInput = await inquirer.prompt([
        {
            name: "repeat",
            type: "confirm",
            message: "Do you want to remove another task?"
        }
    ]);
    if (userInput.repeat == "y" || "Y" || "yes" || "YES") {
        removetask(taskList)
    }
}*/
// removeTasks.ts
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
        case "addTask":
            addTask(taskList);
            console.log("Your task has been successfully");
        case "removeTask":
            removetask(taskList);
            console.log();
        case "updateTask":
            console.log();
        case "exit":
    }
}
//while ()
//}
export default mainScreen;
