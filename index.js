import inquirer from 'inquirer';
import fs from 'fs'
import generateMarkdown from './utils/generateMarkdown.js';

inquirer
  .prompt([
    {
        type: 'input',
        message: 'Provide the title of your project:',
        name: 'title',
    },
    {
        type: 'list',
        message: 'Select a license for your project:',
        name: 'license',
        choices: 
        [   'MIT',
            'Apache 2.0',
            'GNU GPL v2',
            'BSD 3-Clause',
            'WTFPL',
            'None',
        ]
    },
    {
        type: 'input',
        message: 'Provide a basic description of your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Explain what purpose this project is meant to serve:',
        name: 'problem',
    },
    {
        type: 'input',
        message: 'Provide installation instructions:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide usage information:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Provide contribution guidelines:',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Provide test instructions:',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Enter your email:',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Enter your GitHub username:',
        name:'github',
    },
  ])
  
  .then(data => {
    fs.writeFile('README.md', makereadme(data), (err) => {
        if(err) {
            console.log(err)
        } else {
            console.log('Success!')
        }
    });
});

function makereadme(data) {
    return generateMarkdown(data);
}