
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

console.log(fruits.indexOf('datsssdasdaasdass'));
console.log(fruits.indexOf('oranges'));
console.log(fruits.indexOf('pears'));


const checkFruit = (value) => { //funçao que verifica se algo existe ou nao dentro de um array
    const check = fruits.indexOf(value)
    return (check === -1) ? `${value} not found` : `fruit found ${fruits[check]}    `
}
console.log(checkFruit('s'))


function quickCheck(arr, elem) {
    return arr.indexOf(elem) != -1;
  }
  console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));