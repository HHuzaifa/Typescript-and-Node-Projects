import users from "./users.js"
import inquirer from "inquirer"
import { type } from "os"
import mainScreen from "./mainScreen.js"

async function askInput() {
    const answer = await inquirer.prompt([
        {
            name: "accountNumber",
            type: "number",
            message: "Please enter your account number:\n"
        },
        {
            name: "pin",
            type: "password",
            message: "Please enter your atm pin:\n"
        }
    ])

    let user = users.find(u => (u.accountnumber == answer.accountNumber && u.pincode == answer.pin))

    if (typeof user != "undefined") {
        console.log(`Hi ${user.name}, Yor are logged in!`)
        mainScreen(user.balance)

    }else {
        console.log("\nPlease enter the right credentials!")
    }
}
export default askInput;