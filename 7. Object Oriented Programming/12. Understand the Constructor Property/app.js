function Dog(name) {
    this.name = name;
  }
  
let candi = new Dog('pedro')
  // Add your code below this line
function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) { //verificar se o construtor de candi é Dog
      return true;
    } else {
      return false;
    }
}
console.log(joinDogFraternity(candi))
