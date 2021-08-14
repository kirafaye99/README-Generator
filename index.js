//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');



//questions for user input
const questions = 
            [
            {
                type: 'input',
                message: 'What is your project called?',
                name: 'title',
            },
            {
                type: 'input',
                message: 'Provide a short description of your project.',
                name: 'description',
            },
            {
                type: 'input',
                message: 'What problem does your project solve?',
                name: 'solution',
            },
            {
                type: 'input',
                message: 'What motivated you to create this project?',
                name: 'motivation',
            },
            {
                type: 'input',
                message: 'What did you learn/What are some problems you faced while creating your project?',
                name: 'learning',
            },
            {
                type: 'input',
                message: 'Is there anything that needs to be installed and, if so, how do you install?',
                name: 'installation',
            },
            {
                type: 'input',
                message: 'Please provide some instructions for the use of your project.',
                name: 'usage',
            },
            {
                type: 'input',
                message: 'Who were your collaborators/tutorials you followed? (Please include github profile links if applicable)',
                name: 'credit',
            },
            {
                type: 'input',
                message: 'Did you write any tests for your application? If so, how do you run them?',
                name: 'tests',
            },
            {
                type: 'list',
                message: 'Which license do you want to use?',
                choices:[
                    "Apache",
                    "Academic",
                    "GNU",
                    "ISC",
                    "MIT",
                    "Mozilla",
                    "Open"
                ],
                name: 'license',
            },
            {
                type: 'input',
                message: 'What is your github username?',
                name: 'github',
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'email',
            },
            {
                type: 'input',
                message: 'How can people contact you?',
                name: 'contact',
            },
            ];


//bones of readme file to be generated
function generateMarkdown(response) {
    let responses =
    `# ${response.title}
![License](https://img.shields.io/badge/license-${response.license}-brightgreen)
## Description
${response.description}
- ${response.solution}
- ${response.motivation}
- ${response.learning}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credit](#credit)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${response.installation}
## Usage
${response.usage}
## Credit
${response.credit}
## License
${response.license} License
## Tests
${response.tests}
## Questions
#### [My Github](https://github.com/${response.github})
#### Email: 
- ${response.email}
#### How to reach out to me:
- ${response.contact}
`;
return responses;
}

module.exports = generateMarkdown;

//function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Success!! 😊')
    });
}

// function to initialize app
async function init () {
    try {

        const response = await inquirer.prompt(questions);
        // console.log(response);

        const markdown = generateMarkdown(response);
        // console.log(markdown);

        writeToFile('exampleREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }
}

// testing out different ways to do promises
// function init() {
//     inquirer.prompt(questions)
//     .then(response => {
//         writeToFile('README.md', generateMarkdown(response));
//     })
//     .catch(err => console.log(err));
// }

//function call to initialize app
init();
