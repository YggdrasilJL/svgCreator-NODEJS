const {Shape, Triangle, Square, Circle} = require('./shapes.js')

describe('Shape', () => {
    it('should have the correct properties', () => {
        const shape = new Shape('text', 'color', 'textcolor')
        expect(shape.text).toBe('text')
        expect(shape.color).toBe('color')
        expect(shape.textcolor).toBe('textcolor')
    })
})

describe('Triangle', () => {
    it('should render the correct svg from user input', () => {
        const triangle = new Triangle('inc', 'blue', 'orange')
        const expectedOutput = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="150,60 90,190 210,190" fill="blue" />
        <text x="50%" y="70%" dominant-baseline="middle" text-anchor="middle" font-size="30" fill="orange">
        inc
        </text>
      </svg>`
        expect(triangle.renderShape().trim()).toEqual(expectedOutput.trim())
    })
})

describe('Square', () => {
    it('should render the correct svg from user input', () => {
        const square = new Square('dev', 'black', '#FFF')
        const expectedOutput = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect x="110" y="60" width="80" height="80" fill="black"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="30" fill="#FFF">
        dev
        </text>
      </svg>`
        expect(square.renderShape().trim()).toEqual(expectedOutput.trim())
    })
})

describe('Circle', () => {
    it('should render the correct svg from user input', () => {
        const circle = new Circle('pro', '#649300', '#FFF')
        const expectedOutput = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="150" cy="100" r="50" fill="#649300"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="30" fill="#FFF">
        pro
        </text>
      </svg>
      `
        expect(circle.renderShape().trim()).toEqual(expectedOutput.trim())
    })
})