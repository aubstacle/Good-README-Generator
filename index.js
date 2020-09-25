// require fs and inquirer
const fs = require("fs");
const inquirer = require("inquirer");
// require generateMarkdown.js
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    name: "Title",
    message: "Enter Project Title:",
    type: "input",
  },
  {
    name: "Description",
    message: "Enter Project Description:",
    type: "input",
  },
  {
    name: "Installation",
    message: "Installation instructions:",
    type: "input",
  },
  {
    name: "Usage",
    message: "Usage info:",
    type: "input",
  },
  {
    name: "License",
    message: "License info:",
    type: "input",
  },
  {
    name: "Contributing",
    message: "User Contribution:",
    type: "input",
  },
  {
    name: "Tests",
    message: "How to test project:",
    type: "input",
  },
  {
    name: "Email",
    message: "Enter email:",
    type: "input",
  },
  {
    name: "Github",
    message: "Enter github username:",
    type: "input",
  },
];

// function to write README file
function writeToFile(data) {
  fs.writeFile("README.md", generateMarkdown(data), function (err) {
    if (err) throw err;
  });
}

// function to initialize program using inquirer, prompts
function init() {
  inquirer
    .prompt(questions)
    .then(function (data) {
      writeToFile(data);
    })
    .catch(function (err) {
      if (err) throw err;
    });
}

// function call to initialize program
init();
