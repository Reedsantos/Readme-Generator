// declare technologies used
var inquirer = require("inquirer");
var fs = require('fs');
// setting questions with inquirer
inquirer
    .prompt([
        {
            type: "message",
            name: "greeting",
            message: "Please answer each prompt as thoroughly as you can to generate a quality README.md file. Press enter to begin."
        },
        {
            type: "input",
            name: "title",
            message: "What is the name of your repository?"
        }, {
            type: "input",
            name: "description",
            message: "Please provide a description of your project."
        }, {
            type: "input",
            name: "installation",
            message: "What is the instalation process for the user in your project?"
        }, {
            type: "input",
            name: "usage",
            message: "Please provide the usage of your application."
        }, {
            type: "list",
            name: "license",
            message: "What license will your project use? (Use arrow keys)",
            choices: [
                "MIT",
                "GPL",
                "Apache"
            ]
        }, {
            type: "input",
            name: "contributing",
            message: "Who else contributed to the project?"
        }, {
            type: "input",
            name: "tests",
            message: "Please list the tests you used during your project."
        }, {
            type: "input",
            name: "githubUsername",
            message: "What is your Github Username?"
        }, {
            type: "input",
            name: "email",
            message: "What is your email address?"
        }
        // returns promise
    ]).then(function (data) {
        // readme outline with template literals
        const createFile =
            `# ${data.title} <img src='https://img.shields.io/badge/License-${data.license}-black' alt='github badge'>
## Description
${data.description}
### Table of Contents
-  [Title](#title)

-  [Description](#description)

-  [Installation](#installation)

-  [Usage](#usage)

-  [License](#license)

-  [Contributing](#contributing)

-  [Tests](#tests)

-  [Questions](#questions)
            
## Installation
${data.installation}
            
## Usage
${data.usage}
## License
<img src='https://img.shields.io/badge/License-${data.license}-black' alt='github badge'>

## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
If anyone has any questions about my application please contact me below.

${data.email}

[Github link](https://github.com/${data.githubUsername})
`
        // creates new readme in 'new-readme' folder and executes the function
        fs.writeFile("./new-readme/README.md", createFile, function (err) {

            if (err) { return console.log(err) };

            console.log("Success!");

        });
    });
