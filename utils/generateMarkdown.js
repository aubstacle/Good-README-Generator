// function to generate markdown for README
function generateMarkdown(data) {
  return `![MIT License](https://img.shields.io/badge/License-MIT-blue)
  # ${data.Title}

## Description 
${data.Description}

## Table of Contents
[Installation](#Installation)
[Usage](#Usage)
[Contributing](#Contributing)
[Tests](#Tests)
[License](#License)
[Questions](#Questions)

## Installation
${data.Installation}

## Usage
${data.Usage}

## Contributing 
${data.Contributing}

## Tests
${data.Tests}

## License
This project is covered under the MIT license.

## Questions
Feel free to contact me if you have any questions!
email: ${data.Email}
github: https://github.com/${data.Github}

`;
}

module.exports = generateMarkdown;
