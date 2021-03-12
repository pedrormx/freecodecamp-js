/**
 * A long process to prepare green tea.
 * @return {string} A cup of green tea.
 **/
 const prepareGreenTea = () => "greenTea";
 const prepareBlackTea = () => "blackTea";

 /**
  * Get given number of cups of tea.
  * @param {function():string} prepareTea The type of tea preparing function.
  * @param {number} numOfCups Number of required cups of tea.
  * @return {Array<string>} Given amount of tea cups.
  **/
 const getTea = (prepareTea, numOfCups) => {
   const teaCups = [];
 
   for (let cups = 1; cups <= numOfCups; cups += 1) {
     const teaCup = prepareTea();
     teaCups.push(teaCup);
   }
 }
// Add your code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27); // :)
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13); // :)
// Add your code above this line

console.log(tea4GreenTeamFCC, tea4BlackTeamFCC);




//funçoes podem receber funçao como parametro

const showMessage = functionmessage => `Esse é o valor que foi passado ${functionmessage}`
const message = () => 's'

console.log(showMessage(message())) //colocando funçao dentro de funçao