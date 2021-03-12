const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;
      
    if(responseFromServer) {
        makeServerRequest.catch(error => {
          console.log(error)
          resolve("We got the data");
      })
    } else {   
        makeServerRequest.catch(error => {
          console.log(error)
          reject("Data not received");
        }
    )
    }
})
