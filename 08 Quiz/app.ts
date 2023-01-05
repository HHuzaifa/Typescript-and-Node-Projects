#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const questions = [
    {
        question1: "What is the name of the galaxy we live in?",
        answer: {
            a: "Milky Way Galaxy",
            b: "Andromeda Galaxy",
            c: "Draco Dwarf Galaxy"
        }
    }
]