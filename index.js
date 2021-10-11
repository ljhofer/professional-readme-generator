// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project's title?",
        name: "title"

    },
    {
        type: "input",
        message: "Describe your project",
        name: "description"

    },
    {
        type: "input",
        message: "What are the installation requirements?",
        name: "installation"

    },
    {
        type: "input",
        message: "What is the usage for this project?",
        name: "usage"

    },
    {
        type: "list",
        message: "Which license would you like?",
        name: "license",
        choices: ['MIT', 'Apache', 'GNU General Public License', 'Mozilla Public License 2.0'],

    },
    {
        type: "input",
        message: "What are the contributing guidelines for the project?",
        name: "contributing"

    },
    {
        type: "input",
        message: "What are some examples of tests for your project?",
        name: "tests"

    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "gitHub"

    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"

    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        // .prompt(questions)
        // .then

}

// Function call to initialize app
init();
