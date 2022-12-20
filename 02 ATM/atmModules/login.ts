import users from "./users.js"
import inquirer from "inquirer"
import { type } from "os"
import mainScreen from "./mainScreen.js"
import chalk from "chalk"

async function askInput() {
    const answer = await inquirer.prompt([
        {
            name: "accountNumber",
            type: "number",
            message: chalk.blue("\nPlease enter your account number:\n")
        },
        {
            name: "pin",
            type: "password",
            message: chalk.blue("\nPlease enter your atm pin:\n")
        }
    ])

    let user = users.find(u => (u.accountnumber == answer.accountNumber && u.pincode == answer.pin))

    if (typeof user != "undefined") {
        console.log(chalk.green(`Hi ${user.name}, Yor are logged in!\n`))
        mainScreen(user.balance)

    }else {
        console.log(chalk.red("Please enter the right credentials!\n"))
    }
}
export default askInput;