var arr = ["Cat", "Dog", "Tiger", "Zebra"];
var newArray = arr.slice(1, 3);
console.log(newArray)

function sliceArray(anim, beginSlice, endSlice) {
    // Add your code below this line
    return anim.slice(beginSlice, endSlice);
    // Add your code above this line
  }
  var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);