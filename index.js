const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");

// array of questions for user
const questions = [
  {
    name: "Title",
    message: "Enter README title:",
    type: "input",
  },
  {
    name: "Description",
    message: "Enter Description:",
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
    message: "Contribution info:",
    type: "input",
  },
  {
    name: "Tests",
    message: "Test info & availability",
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
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
    inquirer.prompt(questions)
}

// function call to initialize program
init();
