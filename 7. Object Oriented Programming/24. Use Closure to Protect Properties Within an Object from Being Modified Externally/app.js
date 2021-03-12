function Bird() {
    let weight = 15;
    this.getWeight = () => weight;  //criando uma funçao atraves do this
  }
let bird1 = new Bird()
console.log(bird1.getWeight())