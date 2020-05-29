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
      name: "title",
      type: "input",
      message: "Title of the project?",
    },
    {
      name: "authors",
      type: "input",
      message: "Who was the Author on the project?",
    },
    {
      name: "description",
      type: "input",
      message: "Description of the project?",
    },
    {
      name: "contributing",
      type: "input",
      message: "Who were contributors on the project?",
    },
    {
      name: "license",
      type: "input",
      message: "License on the project?",
    },
    {
      name: "installation",
      type: "input",
      message: "Steps required to install the project?",
    },
    {
      name: "usage",
      type: "input",
      message: "How do you use the product?",
    },
    {
      name: "tests",
      type: "input",
      message: "Examples of tests?",
    },
    {
      name: "question1",
      type: "input",
      message: "Personal comments on the product?",
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

  ![GitHub last commit](https://img.shields.io/github/last-commit/${user.github}/${user.repoName}) 
  ![GitHub commit activity](https://img.shields.io/github/commit-activity/y/${user.github}/${user.repoName}) ![GitHub followers](https://img.shields.io/github/followers/${user.github}) 
  ![GitHub repo size](https://img.shields.io/github/repo-size/${user.github}/${user.repoName}) 
  ![GitHub](https://img.shields.io/github/license/${user.github}/${user.repoName})

  ## Contents:
  * [Authors](#authors)
  * [Description](#description)
  * [Contributing](#contributing)
  * [License](#license)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Questions](#questions) 

  ## Authors:
  ${user.authors}

  ## Description:
  ${user.description}

  ## Contributing:
  ${user.contributing}

  ## License:
  ${user.license} 

  ## Installation:
  ${user.installation}

  ## Usage:
  ${user.usage}

  ## Tests:
  ${user.tests}

  ## Questions:
  * ${user.question1}
  * ${user.question2}

    `;
    writeFile("README.md", template);
});