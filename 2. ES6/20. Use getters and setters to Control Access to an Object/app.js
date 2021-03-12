class Book {
    constructor(author) {
      this._author = author;
    }
    // getter
    get writer() {
      return this._author; //should return ._author = author = 'anonymuos'
    }
    // setter
    set writer(updatedAuthor) {//modify ._author
      this._author = updatedAuthor;
    }
  }
  const novel = new Book('anonymous');

  console.log(novel.writer);  // anonymous
  novel.writer = 'newAuthor';
  console.log(novel.writer);  // newAuthor











  // Only change code below this line

// Only change code above this line


class Thermostat {
    constructor(fahrenheit){
        this.fahrenheit = fahrenheit
    }
    get temperature(){
        return ( 5/9) * (this.fahrenheit - 32)
    }
    set temperature(celsius){
        this.fahrenheit = (celsius * 9.0) / 5 + 32  
    }
}
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius