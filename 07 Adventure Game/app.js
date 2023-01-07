import inquirer from "inquirer";
import chalk from "chalk";
async function playGame() {
    var running = true;
    // Game variables
    let enemies = [] = ["Skeleton", "Assassin", "Zombie"];
    let maxEnemyHealth = 75;
    let maxEnemyAttackDamage = 25;
    // Player variables
    let maxplayerHealth = 100;
    let maxPlayerAttackDamage = 50;
    let numOfHealthPotions = 3;
    let healthPotionHealAmount = 30;
    let healthPotionDropChance = 50; // Percent
    GAME: do {
        console.log(chalk.red("\nWelcome to the Dungeons!!!\n"));
        console.log(chalk.yellow.bold("-------------------------------------------------------------"));
        let enemyHealth = Math.floor(Math.random() * maxEnemyHealth);
        let enemy = enemies[Math.floor(Math.random() * enemies.length)];
        // A particular enemy appeared
        console.log(chalk.red(`\t#The ${enemy} enemy appeared!#\n`));
        while (enemyHealth > 0) {
            console.log(`\tYour HP: ${maxplayerHealth}.`);
            console.log(`\t${enemy}'s HP: ${enemyHealth}.`);
            console.log(`\n\tWhat would you like to do?`);
            const userActionChoices = await inquirer.prompt([
                {
                    name: "myActions",
                    type: "list",
                    choices: ["Attack", "Drink Health Potion", "Run Away"],
                    message: "what would you like to do?"
                }
            ]);
            switch (userActionChoices.myActions) {
                case "Attack":
                    let damageDealt = Math.floor(Math.random() * maxPlayerAttackDamage);
                    let damageTaken = Math.floor(Math.random() * maxEnemyAttackDamage);
                    enemyHealth -= damageDealt;
                    maxplayerHealth -= damageTaken;
                    console.log(`You did ${damageDealt} to ${enemy}.`);
                    console.log(`You took ${damageTaken} from  ${enemy} in retaliation.`);
                    if (maxplayerHealth < 1) {
                        console.log(chalk.red("\tYou have taken too many hits, you are too weak to go on."));
                    }
                    break;
                case "Drink Health Potion":
                    if (numOfHealthPotions > 0) {
                        maxplayerHealth += healthPotionHealAmount;
                        numOfHealthPotions--;
                        console.log(`You gained HP: ${healthPotionHealAmount} by drinking health potion, 
                    you now have ${numOfHealthPotions} left.`);
                    }
                    else {
                        console.log(`You have no health potions left`);
                    }
                    break;
                case "Run Away":
                    console.log(`You ran away from the ${enemy}!`);
                    continue GAME;
            }
        }
        if (maxplayerHealth < 1) {
            console.log(`You limp out of the dungeon, weak from battle!`);
        }
        console.log('-------------------------------------------------------------');
        console.log(`#${enemy} was defeated! #`);
        console.log(`You have HP: ${maxEnemyHealth} left`);
        if (Math.floor(Math.random() * 100 + 1) < healthPotionDropChance) {
            numOfHealthPotions++;
            console.log(`The e${enemy} dropped a health potion!`);
            console.log(`You have ${numOfHealthPotions} health potion(s).`);
        }
        console.log('-------------------------------------------------------------');
    } while (running);
}
async function runLoop() {
    var running = true;
    const userNextAction = await inquirer.prompt([
        {
            name: "nextAction",
            type: "list",
            choices: ["Play", "Exit"],
            message: "What would you like to do?"
        }
    ]);
    switch (userNextAction.nextAction) {
        case "Play":
            playGame();
            break;
        case "Exit":
            running = false;
            console.log("Exit Done!");
    }
}
runLoop();
