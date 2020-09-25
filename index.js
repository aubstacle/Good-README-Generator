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
    message: "Choose a License:",
    choices: ["bsl-1.0", "mit", "apache-2.0", "gpl-3.0", "mpl-2.0"],
    type: "list",
  },
  {
    name: "Contributing",
    message: "User Contribution info:",
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
      "New .md file successfully written!"
    })
    .catch(function (err) {
      if (err) throw err;
      console.log("Initialize error")
    });
}

// function call to initialize program
init();
