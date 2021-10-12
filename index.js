// Calls packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// An array of questions for user input
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

// Writes the final template string to the README file
function writeToFile(finalReadme) {

    fs.writeFile("test.md", finalReadme, err =>
        err ? console.error(err) : console.log("Success!"))

}

// Initializes app
function init() {
    inquirer
        .prompt(questions)
        .then ((responses) => {
            // Sends the responses to the generate markdown package and sets the return to finalReadme
            const finalReadme = generateMarkdown(responses);
           
            // Calls the function to write the final file using the template string
            writeToFile(finalReadme);
        })
}

// Function call to initialize app
init();
