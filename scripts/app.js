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
        //sequence is correct so far
            }
      else {
        // GAME OVER
        alert('game over');
      }
        myGame.userClickCount += 1;

      if (myGame.userClickCount >= myGame.sequence.length) {
        alert('sequence correct');
        myGame.nextRound();
      }
  });
}); /* No more Coffee and Sugar */
