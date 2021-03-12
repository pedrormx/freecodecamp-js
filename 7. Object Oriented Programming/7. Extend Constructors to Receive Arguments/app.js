function Bird(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}

//Funçao construtora recebendo parametros

let bird1 = new Bird('Di', 'Green')
console.log(bird1.name)