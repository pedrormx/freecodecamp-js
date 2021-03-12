let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };

const keysObject = (obj) => {
    let contador = 1
    let i = Object.keys(obj)
    for (let s in i){
        console.log(`${contador++} ${i[s]}`)
    }
}
keysObject(users)