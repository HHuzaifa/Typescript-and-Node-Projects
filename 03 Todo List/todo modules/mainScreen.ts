import inquirer from "inquirer";
import addTask from "./addTask.js";

var taskList: Array<string> = ["huzaifa", "hamza", "hassan"];


async function mainScreen() {
    //do {
    const userInput = await inquirer.prompt([
        {
            name: "optionsList",
            type: "list",
            choices: ["displayTasks", "addTask", "updateTask", "exit"]
        }
    ]);
    switch (userInput.optionsList) {
        case "displayTasks":
            for (let i = 0; i < taskList.length; i++) {
                console.log(taskList[i])
            }

        case "addTask":
            addTask(taskList)
            console.log("Your task has been successfully")
            
        case "updateTask":
            console.log()

        case "exit":

    }
}
    //while ()
//}



export default mainScreen;