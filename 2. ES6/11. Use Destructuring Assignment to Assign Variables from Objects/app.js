const user = { name: "Jonh Doe", age: 24 }
const { name: userName, age: userAge} = user
console.log(userName)


const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const { today: highToday, tomorrow: highTomorrow} =  HIGH_TEMPERATURES

// Only change code above this line