var str = "Hello World";
var bySpace = str.split(" ");

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);

console.log(byDigits.join(" "))


function splitify(str) {
    // Add your code below this line
    return str.split(/\W/);
    // Add your code above this line
  }
  splitify("Hello World,I-am code");