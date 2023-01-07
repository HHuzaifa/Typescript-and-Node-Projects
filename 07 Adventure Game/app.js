import chalk from "chalk";
async function playGame() {
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
    // If True keep the game running
    let running = Boolean;
    console.log(chalk.red("\nWelcome to the Dungeons!!!\n"));
    console.log(chalk.yellow.bold("-------------------------------------------------------------"));
    let enemyHealth = Math.floor(Math.random() * maxEnemyHealth);
    let enemy = enemies[Math.floor(Math.random() * enemies.length)];
    // A particular enemy appeared
    console.log(chalk.red(`\tThe ${enemy} enemy appeared!`));
    console.log(enemyHealth);
}
playGame();
