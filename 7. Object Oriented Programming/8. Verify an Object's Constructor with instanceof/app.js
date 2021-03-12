let Bird = function(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}
  
let crow = new Bird("Alexis", "black");
  
crow instanceof Bird; //vai verificar se crow foi estanciado por uma funaçao construtorbird, usando o instanceof