var inquirer = require("inquirer");
var fs = require('fs');

inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "Title?"
        }, {
            type: "input",
            name: "description",
            message: "Description?"
        }, {
            type: "input",
            name: "installation",
            message: "Installation?"
        }, {
            type: "input",
            name: "usage",
            message: "Usage?"
        }, {
            type: "list",
            name: "license",
            message: "lisence?",
            choices: [
                "MIT",
                "GPL",
                "Apache"
            ]
        }, {
            type: "input",
            name: "contributing",
            message: "Contributions?"
        }, {
            type: "input",
            name: "tests",
            message: "Tests?"
        }, {
            type: "input",
            name: "githubUsername",
            message: "Github Username?"
        }, {
            type: "input",
            name: "email",
            message: "Email Address?"
        }
    ]).then(function (data) {
        
        const createFile =
            `# ${data.title} <img src='https://img.shields.io/badge/License-${data.license}-black' alt='github badge'>
## Description
${data.description}
### Table of Contents
-  [Title](#title)

-  [Description](#description)

-  [Installation](#installation)

-  [Usage](#usage)

-  [Lisense](#lisence)

-  [Contributors](#contributors)

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

        fs.writeFile("./new-readme/README.md", createFile, function (err) {

            if (err) { return console.log(err) };

            console.log("Success!");

        });
    });
