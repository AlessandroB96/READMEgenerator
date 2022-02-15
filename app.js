const inquirer = require('inquirer');
const generateREADME = require('./utils/generateFILE');

portfolioData = 'test';

const promptUser = () => {

return inquirer.prompt([
    {
    type: 'input',
    name: 'name',
    message: 'What is your name (Required)?',
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
    name: 'github',
    message: 'Enter your GitHub Username (Required)',
    validate: githubInput => {
        if (githubInput) {
        return true;
        } else {
        console.log('Please enter your Github username!')
        return false;
        }
    }
    },
    {
    type: 'confirm',
    name: 'confirmAbout',
    message: 'Would you like to enter some information about yourself for an "About" section?',
    default: true
    },
    {
    type: 'input',
    name: 'about',
    message: 'Provide some information about yourself:',
    when: ({ confirmAbout}) => confirmAbout
    }
]);
};


promptUser() 
    .then(portfolioData => {
        return generateREADME(portfolioData);
    });