function Bird() { }
function Penguin(){}
Penguin.prototype.fly = function() {
    return "Alas, this is a flightless bird.";
};

Bird.prototype.fly = function() { return "I am flying!"; };

let penguin = new Penguin()
penguin.fly();
