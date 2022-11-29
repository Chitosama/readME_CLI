// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.license}

  ${data.tech}

## Description
${data.description}

## Table of Contents
[Description](#description)
[Installation](#installation-instructions)
[Usage](#usage-information)
[Contribution](#contribution-guildines)
[Testing](#testing-instruction)
[Questions](#questions)

## Installation Instructions
${data.installation}

## Usage Information
${data.usage}

## Contribution Guidlines
${data.contribution}

## Testing Intructions
${data.testing}

##Questions?
github.com/${data.githubName}
${data.email}
`;
}
//WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions

module.exports = generateMarkdown;
