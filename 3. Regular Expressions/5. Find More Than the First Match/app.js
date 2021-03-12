let frases = "Boy aBoy AbOy bOY BoY"
let search = /boy/gi 
/**
 * g = tudo que tiver 'a', 'A'
 */
let result = frases.match(search)
let i = 1
for(i; i < result.length; i++){
}
console.log(`Frases tem exatamente ${i} 'boy'`)


