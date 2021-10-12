// Creates a function that returns a license badge based on which license is passed in, if no license is selected an empty string will be returned
function renderLicenseBadge(license) {

    let licenseBadge = "";    

    switch(license) {
        case "MIT":
            licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
            break;

        case "Apache":
            licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
            break;
            
        case "Boost Software License": 
            licenseBadge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)";
            break;

        case "Mozilla Public License 2.0":
            licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
            break;
    }
    return licenseBadge;   
}

// Create a function that returns the license link
function renderLicenseLink(license) {
    let licenseLink = ""

    switch(license) {
        case "MIT":
            licenseLink = "](https://opensource.org/licenses/MIT)";
            break;

        case "Apache":
            licenseLink = "](https://opensource.org/licenses/Apache-2.0)";
            break;
        
        case "Boost Software License": 
            licenseLink = "](https://www.boost.org/LICENSE_1_0.txt)";
            break;

        case "Mozilla Public License 2.0":
            licenseLink = "](https://opensource.org/licenses/MPL-2.0)";
            break;

        case "I don't want a license":
            licenseLink = "No license selected";
            break;
    }     
    return licenseLink;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {


  //TODO: pass license info to the generateMarkdown function somwehow



}

// TODO: Figure out how to do the Table of Contents section and make it link
// TODO: Add sections to table of contents
// TODO: Make the GH link actually link

function generateMarkdown(data) {
    
    const licenseBadge = renderLicenseBadge(data.license);
    const licenseLink = renderLicenseLink(data.license);

   
    return `# ${data.title}
## Licensing
This project is licensed under:
${licenseBadge}${licenseLink}

    
## Description 
${data.description}
    
## Table of Contents

## Installation
${data.installation}

## Usage
${data.usage}

## How to Contribute
${data.contributing}

## Tests
${data.tests}

## Questions
Please email any questions to to ${data.email} or reference my [GitHub profile](https://github.com/${data.gitHub}). 
`;
}

module.exports = generateMarkdown;
