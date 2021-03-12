function confirmEnding(str, target){
    return str.endsWith(target)
}
console.log(confirmEnding('Pedro asdasd', 'sd'))

function confirmEnding(str, target) {
    return str.slice(-target.length) === target
  }
  
  confirmEnding("Bastian", "n");
  