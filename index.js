var inquirer = require("inquirer");
inquirer
.prompt([
    {
      type: "input",
      name: "title",
      message: "Title?"
    },{
        type: "input",
        name: "description",
        message: "Description?"
    },{
        type: "input",
        name: "installation",
        message: "Installation?"
    },{
        type: "input",
        name: "usage",
        message: "Usage?"
    },{
        type: "list",
        name: "license",
        message: "lisence?",
        choices: [
            "MIT",
            "GPL",
            "Apache"
        ]
    },{
        type: "input",
        name: "contributing",
        message: "Contributions?"
    },{
        type: "input",
        name: "tests",
        message: "Tests?"
    },{
        type: "input",
        name: "githubUsername",
        message: "Github Username?"
    },{
        type: "input",
        name: "email",
        message: "Email Address?"
    }]);

const createfile = 
`# Title
## Description

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
    
## Usage
## License
## Contributing
## Tests
## Questions
If anyone has any questions about my application please contact me below.`;
