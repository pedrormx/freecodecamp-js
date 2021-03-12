let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
console.log(firstRegex.test(firstString));
let notFirst = "You can't find Ricky now.";
console.log(firstRegex.test(notFirst));


