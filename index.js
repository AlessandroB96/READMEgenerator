const inquirer = require('inquirer');
const fs = require('fs');
const writeFile = require('./utils/generateFILE');
const generateREADME = require('./dist/src/md-template')


const promptUser = () => {


    return inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: 'What is the title of your project? (Required)?',
        validate: nameInput => {
            if (nameInput) {
            return true;
            } else {
            console.log('Please enter your name!');
            } 
        }
    },
        {
        type: 'input',
        name: 'description',
        message: 'Enter a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
            return true;
            } else {
            console.log('Please enter a description!')
            return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license',
        choices: ['MIT', 'Mozilla', 'IBM', 'Boost'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github username (Required)',
        validate: githubInput => {
            if (githubInput) {
            return true;
            } else {
            console.log('Please enter a github username!')
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installInstructions',
        message: 'Please enter installation instructions (Required)',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please enter instructions on how to install the application!')
                return false;
            }
        }
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter the contribution criteria for the project.",
        validate: contribute => {
            if (contribute) {
                return true;
            } else {
                console.log("Enter your project's contribution criteria!");
                return false
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Enter your project's usage information.",
        validate: usage => {
            if (usage) {
                return true;
            } else {
                console.log("Enter your project's usage information!");
                return false
            }
        }
    },
    {
        type: "input",
        name: "test",
        message: "Enter your project's test instructions.",
        validate: testInfo => {
            if (testInfo) {
                return true;
            } else {
                console.log("Enter your project's test instructions!");
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email (Required)',
        validate: emailInput => {
            if (emailInput) {
            return true;
            } else {
            console.log('Please enter your email!')
            return false;
            }
        }
    },
]);
};

const startPrompt = () => {

    console.log(`
    =======================================================
    Welcome to the README generator! Enter your info below 
    =======================================================
    `);
    return promptUser();
}

startPrompt() 
    .then(userData => {
        return generateREADME(userData);
    })
    .then(mdFILE => {
        return writeFile(mdFILE);
    })
    .catch(err => {
        console.log(err);
    });