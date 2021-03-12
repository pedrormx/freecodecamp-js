function Bird(name) {
    this.name  = name;
    this.numLegs = 2;
}
  
let duck = new Bird("Donald");
let canary = new Bird("Tweety");
let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property) ) {//se as propriedades que existem em duck for verdadeiro
    ownProps.push(property);//adicione as propriedades dentro de ownProps
  }
}

console.log(ownProps);

