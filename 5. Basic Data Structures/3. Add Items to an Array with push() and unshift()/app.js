let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];
romanNumerals.unshift('XIX', 'XX');
console.log(romanNumerals)
//[ 'XIX', 'XX', 'XXI', 'XXII' ] é adicionado no inicio do array

romanNumerals.push(twentyThree);
//é adicionado no final


function mixedNumbers(arr) {
    // change code below this line
    arr.unshift("I", 2, "three");
    arr.push(7, "VIII", 9);
    // change code above this line
    return arr;
  }
  
  // do not change code below this line
  console.log(mixedNumbers(["IV", 5, "six"]));