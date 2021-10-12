// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // TODO: Add switch statements for these


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  // TODO: Add switch statements for these
  //TODO: Start with just the link with the text of license title, later replace with license badge
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// TODO: Figure out how to do the Table of Contents section and make it link
// TODO: Make the GH link actually link
// TODO: Add in licensing stuff
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description 
  ${data.description}
  
  ## Table of Contents

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Please eamil any questions to to ${data.email} or reference my GitHub profile at https://github.com/${data.gitHub}. 

  ##Licensing

`;
}

module.exports = generateMarkdown;
