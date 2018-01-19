      var targetNumber;

      var counter;
      var Wins = 0;
      var Losses = 0;
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
      alert("You win");
      Wins++;
      $("#current-wins").text(Wins);
      resetGame();
    }

    else if (counter >= targetNumber) {
      alert("You lost");
      Losses++;
      $("#current-losses").text(Losses);
      resetGame();
    }

  });
