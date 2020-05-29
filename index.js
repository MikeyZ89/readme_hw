//Node Modules
const fs = require("fs");
const util = require("util");

//NPM Packages
const inquirer = require("inquirer");

const path = require("path");

function writeFile(filename, data) {
  return fs.writeFileSync(path.join(process.cwd(), filename), data);
}

inquirer
  .prompt([
    {
      name: "title",
      type: "input",
      message: "What is the title of your project?",
    },
    {
      name: "description",
      type: "input",
      message: "What is the description of the project?",
    },
    {
      name: "installation",
      type: "input",
      message: "What are the steps required to install your project?",
    },
    {
      name: "license",
      type: "input",
      message: "What is your license?",
    },
    {
      name: "contributing",
      type: "input",
      message: "Who are the contributors on this project?",
    },
    {
      name: "github",
      type: "input",
      message: "What is your GitHub username?",
    },
    {
      name: "repoName",
      type: "input",
      message: "What is your GitHub repo name?",
    },
    {
      name: "usage",
      type: "input",
      message: "Provide instructions for use of your project",
    },
    {
      name: "tests",
      type: "input",
      message: "Insert Examples of tests",
    },
    {
      name: "question1",
      type: "input",
      message: "What is your GitHub proflie picture?",
    },
    {
      name: "question2",
      type: "input",
      message: "What is your GitHub email??",
    },
  ])
  .then(function (user) {
    console.log(user);
    const template = `
  # ${user.title}
  ## Description
  ${user.description}

  ![GitHub repo size](https://img.shields.io/github/repo-size/${user.github}/${user.repoName})

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Test](#tests)
  * [Questions](#questions) 

  ## Installation
  ${user.installation}

  ## Usage
  ${user.usage}

  ## License
  ${user.license} 

  ![GitHub](https://img.shields.io/github/license/${user.github}/${user.repoName})

  ## Contributing
  ${user.contributing}

  ## Tests

  ## Questions
  * ${user.question1}
  * ${user.question2}

    `;
    writeFile("README.md", template);
});