const consultacpf = cpf => {
    const regex = /\d{3}\.?\d{3}\.?\d{3}-?\d{2}/ //so aceita 3 numeros
    const result = regex.test(numbers)
    return result ? 'Certo' : 'Errado'
}
console.log(numbers('222.222.222-22'))
