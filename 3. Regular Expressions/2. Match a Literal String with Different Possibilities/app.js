let animals = "Animals dog, cat, bird e fish"
let searhRegEx = /dog|cst|d|a/ 
/**
 *  / = Procurar
 *  | = Ou
 */
let search = searhRegEx.test(animals)
console.log(search)


let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
let result = petRegex.test(petString);
console.log(result)