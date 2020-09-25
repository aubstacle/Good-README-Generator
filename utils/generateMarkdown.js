// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description 
${data.Description}

## Table of Contents
Installation
Usage
Contributing
Tests
Questions

## Installation
${data.Installation}

## Usage
${data.Usage}

## Contributing 
${data.Contributing}

## Tests
${data.Tests}

## License

## Questions
Feel free to contact me if you have any questions!
${data.Email}
${data.Github}

`;
}

module.exports = generateMarkdown;
