let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/; //so vai aceitar 3 numeros depois de "ha"
console.log(multipleA.test(A4));
console.log(multipleA.test(A2));
console.log(multipleA.test(A100));