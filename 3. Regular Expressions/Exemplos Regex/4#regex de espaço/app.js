const checkSpace = (strings) => {
    const regexSpace = /[\r\n\t\f\v ]/ //essas tags sao importantes pra verificar o espaço
    const resultSpaceRegex = strings.match(regexSpace)
    return resultSpaceRegex ? 'Nao pode ter espaço' : 'Nao tem espaço'
}
console.log(checkSpace('ass'))