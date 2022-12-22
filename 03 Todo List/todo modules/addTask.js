import inquirer from "inquirer";
async function addTask(taskList) {
    const userInput = await inquirer.prompt([
        {
            name: "addingTask",
            type: "input",
            message: "Enter the task details here:\n"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do want to add more tasks?\n"
        }
    ]);
    if (userInput.addingTask) {
        taskList.push(userInput.addingTask);
    }
    else {
        console.log("Please enter a valid input!");
    }
}
;
export default addTask;
