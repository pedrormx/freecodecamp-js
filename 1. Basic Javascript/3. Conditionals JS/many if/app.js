/**
 * 
 * You should have at least four else statements
 * You should have at least four if statements
 * You should have at least one return statement
 * 
 * testSize(0) should return "Tiny"
 * testSize(4) should return "Tiny"
 * testSize(5) should return "Small"
 * testSize(8) should return "Small"
 * testSize(10) should return "Medium"
 * testSize(14) should return "Medium"
 * testSize(15) should return "Large"
 * testSize(17) should return "Large"
 * testSize(20) should return "Huge"
 * testSize(25) should return "Huge"
 * 
 */


function testSize(number){
    var numberSize = ''
        if (number < 5) {
            numberSize = 'Tiny'
        } else if (number < 10 && number >= 5) {
            numberSize = 'Small'
        } else if (number < 15  && number >= 10) {
            numberSize = 'Medium'
        } else if (number < 20 && number >= 10){
            numberSize = 'Large' 
        } else {
            numberSize = 'Huge'
        }
return numberSize
}

console.log(testSize(10))
