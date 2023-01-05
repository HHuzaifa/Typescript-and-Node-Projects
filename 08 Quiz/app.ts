#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

// An object representing quiz's question and answers.
const questions = [] = [
    {
        question1: "What is the name of the galaxy we live in?",
        answer1: {
            a: "milky Way Galaxy",
            b: "andromeda Galaxy",
            c: "draco Dwarf Galaxy"
        },
        correctAnswer: "milky Way Galaxy"
    },
    {
        question2: "What is the opposite of good?",
        answer2: {
            a: "happy",
            b: "bad",
            c: "anger"
        },
        correctAnswer: "bad"
    },
    {
        question3: "Select the vital organ of a human body.",
        anwser3: {
            a: "foot",
            b: "finger",
            c: "heart"
        },
        correctAnswer: "heart"
    },
    {
        question4: "What is the planet's name we live on?",
        answer4: {
            a: "jupyter",
            b: "earth",
            c: "venus"
        },
        correctAnswer: "earth"
    },
    {
        question5: "What we see in the sky at night?",
        answer5: {
            a: "moon",
            b: "saturn",
            c: "sun"
        },
        correctAnswer: "moon"
    }
]

