function greaterThanTen(arr) {
    let newArr = []; //create array empty
    for (let i = 0; i < arr.length; i++) { //scroll through the array that was passed in the function
      if (arr[i] > 10) { //if such an array value that is traversed is equal to 10
        newArr.push(arr[i]); //add that value inside newArr
      }
    }
    return newArr;
  }
  
console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1]));


function filteredArray(arr, elem) {
    let newArr = [];
    // change code below this line
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(elem) == -1) {
        //Checks every parameter for the element and if is NOT there continues the code
        newArr.push(arr[i]); //Inserts the element of the array in the new filtered array
      }
    }
  
    // change code above this line
    return newArr;
  }
  // change code here to test different cases:
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));



