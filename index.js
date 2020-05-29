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
      name: "installation",
      type: "input",
      message: "Steps required to install the project?",
    },
    {
      name: "contributing",
      type: "input",
      message: "Who were contributors on the project?",
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
      message: "How do you use the product?",
    },
    {
      name: "tests",
      type: "input",
      message: "Examples of tests?",
    },
    {
      name: "license",
      type: "input",
      message: "What is your license?",
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

  ![GitHub last commit](https://img.shields.io/github/last-commit/${user.github}/${user.repoName}) 
  ![GitHub commit activity](https://img.shields.io/github/commit-activity/y/${user.github}/${user.repoName}) ![GitHub followers](https://img.shields.io/github/followers/${user.github}) 
  ![GitHub repo size](https://img.shields.io/github/repo-size/${user.github}/${user.repoName}) 
  ![GitHub](https://img.shields.io/github/license/${user.github}/${user.repoName})

  ## Contents:
  * [Authors](#authors)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions) 

  ## Authors:
  ${user.authors}

  ## Description:
  ${user.description}

  ## Installation:
  ${user.installation}

  ## Usage:
  ${user.usage}

  ## License:
  ${user.license} 

  ## Contributing:
  ${user.contributing}

  ## Tests:
  ${user.tests}

  ## Questions:
  * ${user.question1}
  * ${user.question2}

    `;
    writeFile("README.md", template);
});