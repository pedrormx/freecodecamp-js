let obj = {
    name:"FreeCodeCamp",
    review:"Awesome"
  };
  Object.freeze(obj); //usando o Object.freeze ele nao vai permitir altereçao no objeto
  obj.review = "bad"; // will be ignored. Mutation not allowed
  obj.newProp = "Test"; // will be ignored. Mutation not allowed
  console.log(obj); 
  // { name: "FreeCodeCamp", review:"Awesome"}


  function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
  
    Object.freeze(MATH_CONSTANTS)
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();