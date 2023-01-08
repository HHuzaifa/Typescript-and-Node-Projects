#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
async function startTimer() {
    // Ask the user for the countdown duration in minutes
    const duration = await inquirer.prompt([
        {
            type: 'input',
            name: 'duration',
            message: chalk.blue('Enter the countdown duration in minutes:'),
            validate: (input) => {
                const value = parseInt(input, 10);
                if (!Number.isNaN(value) && value > 0) {
                    return true;
                }
                return chalk.red('Please enter a valid number of minutes');
            },
        },
    ]);
    // Calculate the end time by adding the duration to the current time
    const endTime = new Date().getTime() + duration.duration * 60 * 1000;
    // Display the countdown
    while (true) {
        // Calculate the remaining time
        const currentTime = new Date().getTime();
        const remainingTime = Math.floor((endTime - currentTime) / 1000);
        // If the countdown is finished, exit the loop
        if (remainingTime <= 0) {
            console.log(chalk.yellow('Countdown finished!'));
            break;
        }
        // Print the remaining time
        console.log(chalk.yellow(`Remaining time: ${remainingTime} seconds`));
        // Sleep for 1 second
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }
}
startTimer();
