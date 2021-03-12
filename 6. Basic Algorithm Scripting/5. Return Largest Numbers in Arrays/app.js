function largestOfFour(arr, finalArr = []) {
    return !arr.length
      ? finalArr
      : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])))
}
  
  
function largestOfFour(arr) {
      return arr.map(Function.apply.bind(Math.max, null));
}
console.log(largestOfFour([1,2,3,4,5,6]))
