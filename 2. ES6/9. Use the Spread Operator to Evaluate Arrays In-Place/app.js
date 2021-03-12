var arr = [6, 89, 3, 45];
var maximus = Math.max(...arr); 
// returns 89, we using return a number max in array
// the best way, to return the greatest number

console.log(maximus)


const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
const arr2 = [...arr1];
console.log(arr2); // arr2 should not be affected

for(let i = 0; i < arr1.length; i++){
	console.log(arr1[i])
}

