const verificationDefaultNick = nick => {
    const regex = /\W|[\r\n\t\f\v]/g
    const resultRegexNickName = regex.test(nick)
    return resultRegexNickName ? 'Voce nao pode ter Espaço ou caracteres especial' : ''
}
console.log(verificationDefaultNick('pedro3'))