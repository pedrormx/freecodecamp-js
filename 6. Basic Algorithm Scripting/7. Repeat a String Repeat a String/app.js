function repeatString(string, multi){
    string.repeat(multi)
}

function repeatStringNumTimes(str, num) {
    return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
  }