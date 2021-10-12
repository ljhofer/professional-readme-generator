// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // TODO: Add switch statements for these
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let licenseLink = ""

    switch(license) {
        case "MIT":
            licenseLink = "[MIT License](https://opensource.org/licenses/MIT)";
            break;

        case "Apache":
            licenseLink = "[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)";
            break;
        
        case "Boost Software License": 
            licenseLink = "[Boost Sofware License 1.0](https://www.boost.org/LICENSE_1_0.txt)";
            break;

        case "Mozilla Public License 2.0":
            licenseLink = "[Mozilla Public License](https://opensource.org/licenses/MPL-2.0)";
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
// TODO: Add in licensing stuff
function generateMarkdown(data) {
    
    const licenseBadge = renderLicenseBadge(data.license);
    const licenseLink = renderLicenseLink(data.license);

   


    return `# ${data.title}
    
    ##Licensing
    ${licenseBadge}
    This project is licensed under the ${licenseLink}.
    
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
    Please eamil any questions to to ${data.email} or reference my GitHub profile at https://github.com/${data.gitHub}. 
  `;
}

module.exports = generateMarkdown;
