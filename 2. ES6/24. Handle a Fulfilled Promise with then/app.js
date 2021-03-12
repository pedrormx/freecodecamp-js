const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;
      
    if(responseFromServer) {
        makeServerRequest.then(result => {
            resolve('We got the data')
            console.log(result)
        })
    } else {  
        makeServerRequest.then(result => {
            reject("Data not received");
            console.log(result)
        })
    }
  });


  