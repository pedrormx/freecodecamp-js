const SpaceShuttle = (targetPlanet) => {
    this.targetPlanet = targetPlanet;
  }
const zeus = new SpaceShuttle('Jupiter');// const zeuz receive the class SpaceShuttle

console.log(zeus)



//we have this shape too

// Only change code below this line

// Only change code above this line

class Vegetable{
    constructor(name){//first function executed as soon as the class is called
        this.name = name
    }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'