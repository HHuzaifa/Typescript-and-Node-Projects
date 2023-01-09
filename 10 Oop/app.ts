#! /usr/bin/env node

import inquirer from "inquirer"
import { extname } from "path";
import { stringify } from "querystring";

class Person {
    personality: string
    // Constructor
    public constructor(personality: string) {
        this.personality = personality
    }

    // Declared personality
    public Person(personality: string) {
        personality = "mystery"
    }

    // Declared functionality returning function
    public async askQuestion(personality: string) {
        const userInput = await inquirer.prompt([
            {
                name: "personalityInput",
                type: "list",
                choices: [1, 2],
                message: "Select 1 if you're an Extrovert, and select 2 if you're an Introvert"
            }
        ]);

        if (userInput.personalityInput === 1) {
            personality = "Extrovert"
        } else if (userInput.personalityInput === 2) {
            personality = "Introvert"
        }
    }// This method return the personality
    public async getPersonality(personality: string) {
        console.log(personality)
    }
}

async function Program(Person: any) {

    var myPerson = new Person()
    await myPerson.askQuestion()
    await myPerson.getPersonality()

}
