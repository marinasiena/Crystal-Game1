      var goal_number;

      var counter;
      var Wins = 0;
      var Losses = 0;
      var number_choices = [];
      var number-crystals;



  $(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#current-total").text(counter);

    if (counter === goal_number) {
      alert("You win");
      Wins++;
      $("#current-wins").text(Wins);
      resetGame();
    }

    else if (counter >= goal_number) {
      alert("You lost");
      Losses++;
      $("#current-losses").text(Losses);
      resetGame();
    }
    function resetGame(){

        goal_number = (Math.floor(Math.random()*101) + 19);
        $("#number-to-guess").text(goal_number);
        counter = 0;
        for (var i = 0; i < 4; i++) {
          number-crystals = (Math.ceil(Math.random()*12));
          number_choices[i] = number-crystals;
        }

    };


  });
