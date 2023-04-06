const inquirer = require('inquirer');
const fs = require('fs');
const circleLogo = require('./lib/circle');
const triangleLogo = require('./lib/triangle');
const squareLogo = require('./lib//square');

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
    
    .then((data) => {
        const shape = data.shape;
        let svgShape;
        switch (shape) {
            case 'circle':
                svgShape = new circleLogo(data);
                fs.writeFile('logo.svg', svgShape.render(data), err => {
                    err ? console.log(err) : console.log('Successfully generated!')
                });
            case 'triangle':
                svgShape = new triangleLogo(data);
                fs.writeFile('logo.svg', svgShape.render(data), err => {
                    err ? console.log(err) : console.log('Successfully generated!')
                });
            case 'square':
                svgShape = new squareLogo(data);
                fs.writeFile('logo.svg', svgShape.render(data), err => {
                    err ? console.log(err) : console.log('Successfully generated!')
                });
        }
    })