const inquirer = require('inquirer')
const fs = require('fs')
const {Shape, Triangle, Square, Circle} = require('./lib/shapes.js')
// gets current hour, minutes and seconds to add on the end of the logo file name,
// so it does not overwrite previous file
const currentDate = new Date()
const seconds = currentDate.getSeconds()
const minutes = currentDate.getMinutes()
const hour = currentDate.getHours()
inquirer
.prompt([
    {
        type: 'input',
        message: 'Text of your SVG (Must be 1-3 characters.)\n',
        // sanity check to make sure the text inputted is 1-3 chars
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
        type: 'input',
        message: 'What color do you want the text to be? (Can be a color keyword, like "blue", or a hex.)\n',
        name: 'textcolor',
        // checks if there is any input at all
        validate: input => {
            if (input.length > 0) {
             return true
            } else {
             return Promise.reject('Invalid Input.')
            }
         },
    },
    {
        type: 'list',
        message: 'What shape do you want your logo to be?\n',
        choices: ['Triangle', 'Circle', 'Square'],
        name: 'shape'
    },
    {
       type: 'input',
        message: 'What color do you want the shape to be? (Can be a color keyword, like "blue", or a hex.)\n',
        name: 'color',
        // checks if there is any input at all
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
    let shape;
    // checks what shape the user picks, declared by the inquirer prompt with the name 'shape' above ^
    switch (data.shape) {
        case 'Triangle':
            shape = new Triangle(data.text, data.color, data.textcolor)
            break

        case 'Square':
            shape = new Square(data.text, data.color, data.textcolor)
            break

        case 'Circle':
            shape = new Circle(data.text, data.color, data.textcolor)
            break
    }
    // renders the shape using the function from shapes.js
    const svgContent = shape.renderShape()
    fs.writeFile(`examples/logo${hour}-${minutes}-${seconds}.svg`, svgContent, err => {
        err ? console.error('Oops! An error occurred,', err) : console.info('Generated logo.svg!')
    })
})
.catch(error => {
    console.error('An error occured,', error)
})