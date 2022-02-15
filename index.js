const inquirer = require('inquirer');
const generateREADME = require('./utils/generateFILE');

portfolioData = 'test';

const promptUser = () => {

console.log(`
    =======================================================
    Welcome to the README generator! Enter your info below. 
    =======================================================
`);
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
}
]);
};


promptUser() 
    .then(portfolioData => {
        return generateREADME(portfolioData);
    });