// write a Ship constructor, that takes the pirates array as its argument.
//crete a method that tell us who is the heigest pirate.
// Captain Balesz has told the crew, that everybody who has wodden_leg have to pay tax (50), so create the woddenLegTax method.
// Nobody's name should equal th forst letter of the captan's name, so create a method that trow the ocean the pirates who's first letter of his name is 'B'.
//Ahoy!

function Ship(pirates) {
  this.pirates = pirates;

  this.theHighest = function () {
    var highestPirate = this.pirates[0];
    this.pirates.forEach(function(pirate) {
      if(highestPirate.height < pirate.height) {
        highestPirate = pirate;
      }
    });
    return highestPirate.name;
  };


  this.woddenLegTax = function () {
    this.pirates.forEach(function(pirate) {
      if (pirate.woddenLeg) {
        pirate.gold -= 50;
      }
    });
  };

  this.throwPirateToOcean = function () {
    var newArrayOfPirates = [];
    this.pirates.forEach(function(pirate) {
      if (pirate.name[0] !== 'B') {
        newArrayOfPirates.push(pirate);
      }
    });
    this.pirates = newArrayOfPirates;
  };
};

pirates = [
    {name: "Jack", height: 175, woddenLeg: true, gold: 100},
    {name: "John", height: 125, woddenLeg: false, gold: 100},
    {name: "Jacob", height: 143, woddenLeg: false, gold: 100},
    {name: "Albert", height: 192, woddenLeg: true, gold: 100},
    {name: "Bacon", height: 112, woddenLeg: false, gold: 100}
];



var blackPerl = new Ship(pirates);

console.log(blackPerl.theHighest()) // => "Albert"
blackPerl.woddenLegTax();
console.log(blackPerl.pirates); // => pirates = [
//     {name: "Jack", height: 175, woddenLeg: true, gold: 50},
//     {name: "John", height: 125, woddenLeg: false, gold: 100},
//     {name: "Jacob", height: 143, woddenLeg: false, gold: 100},
//     {name: "Albert", height: 192, woddenLeg: true, gold: 50},
//     {name: "Bacon", height: 112, woddenLeg: false, gold: 100}
// ];
blackPerl.throwPirateToOcean();
console.log(blackPerl.pirates); //=> pirates = [
//     {name: "Jack", height: 175, woddenLeg: true, gold: 50},
//     {name: "John", height: 125, woddenLeg: false, gold: 100},
//     {name: "Jacob", height: 143, woddenLeg: false, gold: 100},
//     {name: "Albert", height: 192, woddenLeg: true, gold: 50}
// ];)
