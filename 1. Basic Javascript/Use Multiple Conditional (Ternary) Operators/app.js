function findGreaterOrEqual(a, b) {
    if (a === b) {
      return "a and b are equal";
    }
    else if (a > b) {
      return "a is greater";
    }
    else {
      return "b is greater";
    }
}



function findGreaterOrEqual(a, b) {
    return ( a === b )
      ? "a and b are equal" 
      : ( a > b ) ? "a is greater" //else if
      : "b is greater"; //else
}

findGreaterOrEqual(1,1)

function checkSign(num){
    return (num === 0)
    ? "zero" 
    : ( num > 0 ) ? "positive"
    : "negative"
}

console.log(checkSign(-1));



function countdown(n){
    return n < 1 ? [] : [n].concat(countdown(n - 1));
 }