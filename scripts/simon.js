$(document).ready(function() {


/* All the Coffee and Sugar */


    function SimonGame () {
      this.colors = ['red', 'green', 'blue', 'yellow'];
      // Our current sequence
      this.sequence = [];
      // Where the user is in the sequence.
      this.userClickCount = 0;
      // What the player's score is
      this.round = 1;
    }
    // Starts the Simon game
    SimonGame.prototype.startGame = function(){
      console.log('Starting the game...');
      this.addColor();
      this.showSequence();
    };

    // Chooses one of the 4 colors at random and adds it to the sequence
    SimonGame.prototype.addColor = function () {
      var randomIndex = Math.floor(Math.random() * 4);
      this.sequence.push(this.colors[randomIndex]);
    };

    // Blinks the buttons based on the current color sequence
    SimonGame.prototype.showSequence = function () {

    }


    var myGame = new SimonGame();
    myGame.startGame();
    console.log(myGame);


/* No more Coffee and Sugar */
});
