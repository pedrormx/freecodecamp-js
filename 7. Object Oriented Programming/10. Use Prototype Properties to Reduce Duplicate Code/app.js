function Bird(name) {
    this.name  = name;
}
Bird.prototype.le = 22; //adiciona o le, detro da funçao Bird
Bird.prototype.numLegs = 2;
let bird1 = new Bird()

console.log(bird1.le)