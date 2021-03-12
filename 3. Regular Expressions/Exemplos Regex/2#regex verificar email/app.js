const emailVerification = email => {
    const regexEmails = /@gmail|@hotmail|@outlook|@yahoo/i
    const resultRegexEmail = regexEmails.test(email)
    return resultRegexEmail ? 'authorized email provider':'unauthorized email provider' 
}

console.log(emailVerification('pedrormx56@'))