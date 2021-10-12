// TODO: decide about license section and ammend these comments
// Creates a function that returns a license badge based on which license is passed in, if no license is selected an empty string will be returned
function renderLicenseBadge(license) {

    let licenseBadge = "";    

    switch(license) {
        case "MIT":
            licenseBadge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
            break;

        case "Apache":
            licenseBadge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
            break;
            
        case "Boost Software License": 
            licenseBadge = "![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)";
            break;

        case "Mozilla Public License 2.0":
            licenseBadge = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
            break;
    }
    return licenseBadge;   
}

// Returns the license link for the license selected by the user
function renderLicenseLink(license) {
    let licenseLink = ""

    switch(license) {
        case "MIT":
            licenseLink = "This project licensed under the [MIT License]](https://opensource.org/licenses/MIT)";
            break;

        case "Apache":
            licenseLink = "This project licensed under the [Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)";
            break;
        
        case "Boost Software License": 
            licenseLink = "This project licensed under the [Boost Software License](https://www.boost.org/LICENSE_1_0.txt)";
            break;

        case "Mozilla Public License 2.0":
            licenseLink = "This project licensed under the [Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)";
            break;

        case "I don't want a license":
            licenseLink = "This project does not have a license.";
            break;
    }     
    return licenseLink;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {


  //TODO: pass license info to the generateMarkdown function somwehow



}

// Generates the template string to be passed to the markdown file
function generateMarkdown(data) {
    
    const licenseBadge = renderLicenseBadge(data.license);
    const licenseLink = renderLicenseLink(data.license);

   
    return `# ${data.title}
## License
${licenseLink}
${licenseBadge}

    
## Description 
${data.description}
    
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributions
${data.contributing}

## Tests
${data.tests}

## Questions
Please email any questions to ${data.email} or reference my [GitHub profile](https://github.com/${data.gitHub}). 
`;
}

module.exports = generateMarkdown;
