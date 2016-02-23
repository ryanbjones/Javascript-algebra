var updatePlayerPosition = function (player,position) {
  if (player == "player1") {
    $("#player1_strip > .active1").removeClass('active1');
    $("#player1_strip > td:nth-child("+(position)+")").addClass('active1');
    // $("#player1_strip > td:nth-child("+position+")").css("background-color", "white")
    // $("#player1_strip > td:nth-child("+(position+1)+")").css("background-color", "navy")
  } else {
    $("#player2_strip > .active2").removeClass('active2');
    $("#player2_strip > td:nth-child("+(position)+")").addClass('active2');
  }
};

// Player Object:
function Player(name) {
  this.name = name;
  this.position = 0;
};

Player.prototype.move = function() {
  this.position++;
  return this.position;
};

var ryan = new Player("Ryan");
var thomas = new Player("Thomas");

// Game Object:
function Game() {}

//Controller & View:
$(document).ready(function() {
  $("td").hide(); // Hides table data
  $("#alert").hide(); // Hides table data
  $(".finish3").hide();

  $(".start").click(function() {
    $(this).hide(); // Hides start button
    $("#alert").show();

    // Timer:
    var counter = 2;
    var interval = setInterval(function() {
      $("span").text(counter--);
      if (counter == -1) {
      $("#alert").hide();
      $("td").show();
      clearInterval(interval);

      // Gameplay:
      $(document).on("keyup", function(e) {
        if (e.which == 81) {
          updatePlayerPosition('player1',ryan.move());
          if (ryan.position >= 30) {
            $(document).off("keyup")
            $('.finish1').append('<p>').text(ryan.name + ' wins!');
            $('.finish2').append('<img src="http://cdn.meme.am/images/1480924.jpg">');
          }
        }
        else if (e.which == 80){
          updatePlayerPosition('player2',thomas.move());
          if (thomas.position >= 30) {
            $(document).off("keyup")
            $('.finish1').append('<p>').text(thomas.name + ' wins!');
            $('.finish2').append('<img src="http://cdn.meme.am/images/1480924.jpg">');
          }
        }
      });
      // End Gameplay

      }
    }, 1000);
  });
});