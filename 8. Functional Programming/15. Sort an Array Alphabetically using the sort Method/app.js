function ascendingOrder(arr) {
    return arr.sort(function(a, b) {
      return a - b; //trazendo os numeros de tras pra frente
    });
  }
console.log(ascendingOrder([1, 5, 2, 3, 4]))

function reverseAlpha(arr) {
    return arr.sort(function(a, b) {
      return a === b ? 0 : a < b ? 1 : -1;
    });
  }
console.log(reverseAlpha(['l', 'h', 'z', 'b', 's']))


function alphabeticalOrder(arr) {
    // Add your code below this line
    return arr.sort(function(a, b) {
      return a === b ? 0 : a < b ? -1 : 1;
    });
    // Add your code above this line
  }
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);