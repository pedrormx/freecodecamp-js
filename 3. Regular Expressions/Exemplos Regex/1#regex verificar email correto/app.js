const emailVerification = email => {
    const regex = /@/
    const resultRegex = regex.test(email)
    return resultRegex ? `correct email format: ${email}` : `incorrect email format: ${email}`
}

console.log(emailVerification('pedrormx56@gmail.com'))
console.log(emailVerification('pedrormx56gmail.com'))
