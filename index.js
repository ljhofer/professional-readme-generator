// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

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
        choices: ["MIT", "Apache", "Boost Software License", "Mozilla Public License 2.0", "I don't want a license"],
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
function writeToFile(fileName, finalReadme) {

    // TODO: can We write to this readme or do we create a new one with a different file?
   

}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        // TODO: deal with response pass to write file 
        .then ((responses) => {
            console.log(responses);
            
            //TODO: Save project title to a variable
            // const {fileName} = responses.title + ".md";

            const finalReadme = generateMarkdown(responses);
           
            //writeToFile(fileName, finalReadme);

            console.log(finalReadme);

        })
}

// Function call to initialize app
init();
