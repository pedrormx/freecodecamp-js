const car = {
    model: '1AS3',
    color: 'green',
    year: 2000,
    showMessageSpecificationsCar(){
        return `
            MODEL: ${this.model} 
            COLOR: ${this.color}
            YEAR: ${this.year}
            `
    }
}

console.log(car.showMessageSpecificationsCar())