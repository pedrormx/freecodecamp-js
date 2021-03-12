let users = [1,2,3,4,5,6]

for (let user in users) { //Iterate in users using let....in 
    console.log(user);
}

function countOnline(usersObj) {
    // Only change code below this line
    let result = 0;
    for (let user in usersObj) {
      if (usersObj[user].online === true) {
        result++;
      }
    }
    return result;
    // Only change code above this line
  }