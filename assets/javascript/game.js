var targetNumber;

var counter;
var gameWins = 0;
var gameLosses = 0;
var numberOptions = [];
var crystalNumber;

function resetGame(){

targetNumber = (Math.floor(Math.random()*101) + 19);
$("#number-to-guess").text(targetNumber);


counter = 0;


for (var i = 0; i < 4; i++) {
  crystalNumber = (Math.ceil(Math.random()*12));
  numberOptions[i] = crystalNumber;
}

};



resetGame();
for (var i = 0; i < numberOptions.length; i++) {
  var imageCrystal = $("<img>");
  imageCrystal.addClass("crystal-image");
  imageCrystal.attr("src", "https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/c/cd/Crystal_alliance.png/revision/latest?cb=20151121233509");
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);
  $("#crystals").append(imageCrystal);
}


$(".crystal-image").on("click", function() {

var crystalValue = ($(this).attr("data-crystalvalue"));
crystalValue = parseInt(crystalValue);
counter += crystalValue;
$("#current-total").text(counter);

if (counter === targetNumber) {
alert("You win!");
gameWins++;
$("#current-wins").text(gameWins);
resetGame();
}

else if (counter >= targetNumber) {
alert("You lose!!");
gameLosses++;
$("#current-losses").text(gameLosses);
resetGame();
}

});
