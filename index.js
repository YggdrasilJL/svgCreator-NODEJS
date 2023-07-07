const inquirer = require('inquirer')
const fs = require('fs')

inquirer
.prompt([
    {
        type: 'input',
        message: 'Text of your SVG (Must be 1-3 characters.)',
        validate: input => {
           if (input.length > 0 && input.length <= 3) {
            return true
           } else {
            return Promise.reject('Invalid Input.')
           }
        },
        name: 'text'
    },
    {
        type: 'list',
        message: 'What shape do you want your logo to be?',
        choices: ['Triangle', 'Circle', 'Square'],
        name: 'shape'
    },
    {
        type: 'input',
        message: 'What color do you want the shape to be? (Can be a color keyword, like "blue", or a hex.)',
        name: 'color',
        validate: input => {
            if (input.length > 0) {
             return true
            } else {
             return Promise.reject('Invalid Input.')
            }
         },
    }
])
.then(data => {
    console.log(data)
})