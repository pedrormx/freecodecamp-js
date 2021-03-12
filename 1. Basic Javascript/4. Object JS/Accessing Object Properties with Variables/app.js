var dogs = {
    Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
  };
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed); // "Doberman"

var carrs = {
    Gol: "Mutt",  Saveiro: "Doberman",  Camaro: "Beagle"

}
function receiveValueInArray(value){
    console.log(carrs[`${value}`])
}

receiveValueInArray('Gol')