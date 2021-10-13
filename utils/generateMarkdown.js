
// Returns a license badge based on which license is passed in, if no license is selected an empty string will be returned
function renderLicenseBadge(license) {

    let licenseBadge = "";    

    switch(license) {
        case "MIT":
            licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            break;

        case "Apache":
            licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            break;
            
        case "Boost Software License": 
            licenseBadge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
            break;

        case "Mozilla Public License 2.0":
            licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
            break;
    }
    return licenseBadge;   
}

// Returns the license link for the license selected by the user
function renderLicenseLink(license) {
    let licenseLink = ""

    switch(license) {
        case "MIT":
            licenseLink = "This project licensed under the [MIT License](https://opensource.org/licenses/MIT).";
            break;

        case "Apache":
            licenseLink = "This project licensed under the [Apache 2.0 License](https://opensource.org/licenses/Apache-2.0).";
            break;
        
        case "Boost Software License": 
            licenseLink = "This project licensed under the [Boost Software License](https://www.boost.org/LICENSE_1_0.txt).";
            break;

        case "Mozilla Public License 2.0":
            licenseLink = "This project licensed under the [Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0).";
            break;

        case "I don't want a license":
            licenseLink = "";
            break;
    }     
    return licenseLink;
}

// 
function renderLicenseSection(license) {
    
    licenseLink = renderLicenseLink(license);

    let licenseSection = "";
       
    if (licenseLink) {
        licenseSection = `## License
${licenseLink}`;
    }
    return licenseSection

}

// Generates the template string to be passed to the markdown file
function generateMarkdown(data) {
    
    const licenseBadge = renderLicenseBadge(data.license);
    licenseSection = renderLicenseSection(data.license);

   
    return `# ${data.title}
${licenseBadge}

## Description 
${data.description}
    
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
${licenseTableOfContents}
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${licenseLink}

## Contributions
${data.contributing}

## Tests
${data.tests}

## Questions
Please email any questions to <${data.email}> or reference my [GitHub profile](https://github.com/${data.gitHub}). 
`;
}

module.exports = generateMarkdown;
