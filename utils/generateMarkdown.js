// function to generate markdown for README
function generateMarkdown(data) {
  return `![${data.License}](https://img.shields.io/badge/License-${data.License}-blue)
  # ${data.Title}

## Description 
${data.Description}

## Table of Contents
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [Contributing](#Contributing)
4. [Tests](#Tests)
5. [License](#License)
6. [Questions](#Questions)

## Installation
${data.Installation}

## Usage
${data.Usage}

## Contributing 
${data.Contributing}

## Tests
${data.Tests}

## License
This project is covered under the ${data.License} license.
For more information on licenses, click [here](https://choosealicense.com/licenses/)

## Questions
Feel free to contact me if you have any additional questions!
* email: ${data.Email}
* github: https://github.com/${data.Github}

`;
}

module.exports = generateMarkdown;
