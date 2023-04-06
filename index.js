const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'txt',
            message: 'Please enter the characters within your logo (Up to 3 total)'
        }, {
            type: 'input',
            name: 'txtColor',
            message: 'What color of text would you like to use? (Enter color keyword or hexadecimal number)'
        }, {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like your logo to be?',
            choices: ['circle', 'triangle', 'square']
        }, {
            type: 'input',
            name: 'shaepColor',
            message: 'What color would you like the logo to be? (Enter color keyword or hexadecimal number)'
        }
    ])