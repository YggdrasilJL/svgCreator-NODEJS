const inquirer = require('inquirer')
const fs = require('fs')
const {Shape, Triangle, Square, Circle} = require('./lib/shapes.js')
const currentDate = new Date()
const seconds = currentDate.getSeconds()
const minutes = currentDate.getMinutes()
const hour = currentDate.getHours()
inquirer
.prompt([
    {
        type: 'input',
        message: 'Text of your SVG (Must be 1-3 characters.)\n',
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
    const svgContent = shape.renderShape()
    fs.writeFile(`examples/logo${hour}-${minutes}-${seconds}.svg`, svgContent, err => {
        err ? console.error('Oops! An error occurred,', err) : console.info('Generated logo.svg!')
    })
})
.catch(error => {
    console.error('An error occured,', error)
})