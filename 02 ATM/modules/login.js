import users from "./users.js";
import inquirer from "inquirer";
async function askInput() {
    const answer = await inquirer.prompt([
        {
            name: "accountNumber",
            type: "number",
            message: "Please enter your account number."
        },
        {
            name: "pin",
            type: "password",
            message: "Please enter your atm pin."
        }
    ]);
    let user = users.find(u => (u.accountnumber == answer.accountNumber && u.pincode == answer.pin));
    if (typeof user != "undefined") {
        console.log(`Hi ${user.name}, Yor are logged in!`);
    }
    else {
        console.log("Please enter the right credentials!");
    }
}
export default askInput;
