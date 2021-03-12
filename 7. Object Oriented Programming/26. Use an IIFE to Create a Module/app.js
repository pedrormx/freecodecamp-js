function glideMixin(obj) {
    obj.glide = function() {
      console.log("Gliding on the water");
    };
  }
  function flyMixin(obj) {
    obj.fly = function() {
      console.log("Flying, wooosh!");
    };
  }

  //Podemos agrupalos assim:

  let motionModule = (function () {
    return {
      glideMixin: function(obj) {
        obj.glide = function() {
          console.log("Gliding on the water");
        };
      },
      flyMixin: function(obj) {
        obj.fly = function() {
          console.log("Flying, wooosh!");
        };
      }
    }
  })();

  let funModule = ( () => {
    return {
      isCuteMixin: (obj) => {
        obj.isCute = () =>  true; 
      },
      singMixin: (obj) => {
        obj.sing = () =>  console.log("Singing to an awesome tune"); 
      }
  
    }
  })();