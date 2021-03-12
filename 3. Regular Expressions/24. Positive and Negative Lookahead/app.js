let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/; //(?=u) vai vetificar se u vem depois do q
let qRegex = /q(?!u)/; //(?!u) vai verificar se "u" nao esta em noquit depois do 'q'    
console.log(quit.match(quRegex));
console.log(noquit.match(qRegex));


let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);


let sampleWord = "astronaut";
let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);