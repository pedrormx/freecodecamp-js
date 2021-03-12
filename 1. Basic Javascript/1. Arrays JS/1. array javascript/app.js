// We can store all kinds of values ​​in an array
var myArray = ['String', 1, function () { console.log('this is a function within an array') }, true, { name: 'peter' }]

console.log(myArray[0]) // 'String' : String
console.log(myArray[1]) // 1 : Number
console.log(myArray[2]) // 'this is a function within an array' : function
console.log(myArray[3]) // true : boolean
console.log(myArray[4].name) // 'peter' : object


// We can store arrays inside an array
var myNewArray = [myArray, [1]]
console.log(myNewArray[1]) //1 


// We can traverse an array using the index
var arrayIndex = [10, 200, 2000]
console.log(arrayIndex[0]) //10
console.log(1)

// We can modify an array value
myArray[0] = 'Boolean' // let's replace 'String' with 'Boolean'
console.log(myArray)




var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [[10,11,12], 13, 14]
  ];

console.log(arr[3]) // [[10,11,12], 13, 14]
/**
 * arr[3][0] = [10,11,12]
 * arr[3][0][1] = 11 
 */

console.log(arr[3][0]) // 01

console.log(arr[3][0][1]) // 11


var myArray2 = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
console.log(myArray2[2][1])