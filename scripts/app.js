  console.log("Does \'snek\' count as a string?");
  console.log('dom ready');




$(document).ready(function() {
  /* All the Coffee and Sugar */
  var myGame = new SimonGame();
  myGame.startGame();
  console.log(myGame);

  $('button').click(function(){
    var colorJustClicked = $(this).prop('id');
    var currentSequenceColor = myGame.sequence[myGame.userClickCount];
      if (currentSequenceColor === colorJustClicked) {
        myGame.userClickCount += 1;
            }
      else {
        // GAME OVER
        $('body').addClass('game-over');

        setTimeout(function() {
          $('body').removeClass('game-over');
        }, 1500);

        myGame.gameOver();
      }


      if (myGame.userClickCount >= myGame.sequence.length) {
        $('body').addClass('sequence-entered');

        setTimeout(function() {
          $('body').removeClass('sequence-entered');
        }, 1000);

        myGame.nextRound();
      }
  });
}); /* No more Coffee and Sugar */
