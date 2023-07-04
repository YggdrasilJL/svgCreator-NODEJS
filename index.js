const jest = require('jest')
const inquirer = require('inquirer')

inquirer
.prompt([
    {
        type: 'input',
        message: 'Text of your SVG (Max 3 characters)',
        validate: input => {
           if (input.length <= 3) {
            return true
           } else {
            console.log('Oops!')
           }
        },
        name: 'text'
    },
    {
        type: 'list',
        message: 'What shape do you want your logo to be?',
        choices: ['Triangle', 'Circle', 'Square'],
        name: 'shape'
    }
])
// .then(data => {

// })