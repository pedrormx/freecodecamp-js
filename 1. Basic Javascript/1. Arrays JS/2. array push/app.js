// use push to add a value to the array

// now arr1 is going to be [1,2,3,4]
var arr1 = [1,2,3]
arr1.push(4)

// we can add arrays within an array with push
var arr2 = ["Stimpson", "J", "cat"]
arr2.push(["happy", "joy"])

// we can add objects within an array with push
var arr3 = [{nome: 'pedro', idade: 12}]
arr3.push({nome: 'will', idade: 13})
console.log(arr3)