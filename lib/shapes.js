class Shape {
    constructor(text, color) {
        this.text = text
        this.color = color
    }
    renderShape() {
        return this.string
    }
}

class Triangle extends Shape {
    constructor(text, color) {
        super(text, color)
        this.string = `placeholder`
    }
}

class Square extends Shape {
    constructor(text, color) {
        super(text, color)
        this.string = `placeholder`
    }
}

class Circle extends Shape {
    constructor(text, color) {
        super(text, color)
        this.string = `<circle cx="25" cy="75" r="20"/>        `
    }
}

modules.export = {Shape, Triangle, Square, Circle}