#!/usr/bin/node
import chalkAnimation from "chalk-animation";
const pausedStart = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
};
async function displayMessage() {
    let message = chalkAnimation.neon("Calculator Started!!!");
    await pausedStart();
    message.stop();
    console.log(`
    _______________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    `);
}
displayMessage();
