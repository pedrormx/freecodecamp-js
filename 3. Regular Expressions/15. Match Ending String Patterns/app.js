let theEnding = "This is a never ending story";
let storyRegex = /story$/;
/**
 * $ = usando esse "$" voce pega o ultimo valor
 */
console.log(storyRegex.test(theEnding))
let noEnding = "Sometimes a story will have to end";
console.log(storyRegex.test(noEnding));