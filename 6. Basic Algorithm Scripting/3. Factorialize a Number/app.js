const factorizeNumber = (number) => {
    let resultFactorizeNumber = []
    for(let initialValue = 1; initialValue <= number; initialValue++){
        resultFactorizeNumber.push(initialValue)
    }
    return number != 0 ? resultFactorizeNumber.reduce((a, b) => a * b) : 1
    
}
console.log(factorizeNumber(12))

