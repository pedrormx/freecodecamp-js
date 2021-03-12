
function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for(var i = 0; i < arr.length; i++){
        for(var multi = 0; multi < arr[i].length; multi++){
            product *= arr[i][multi] //multiplicar i e multi
        }        
    }
  
    // Only change code above this line
    return product;
  }
  
console.log(multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]]));


