let shortHand = /\w/g; // \W matches any non-word character (equal to [^a-zA-Z0-9_])

let numbers = "#!@#$%¨&*()42%";
let sentence = "Coding´";
numbers.match(shortHand);
sentence.match(shortHand)
console.log(sentence.match(shortHand))
console.log(numbers.match(shortHand))
