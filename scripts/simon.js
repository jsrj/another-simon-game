


/* All the Coffee and Sugar */



    function SimonGame () {
      this.colors = ['red', 'green', 'blue', 'yellow'];
      // Our current sequence
      this.sequence = [];
      // Where the user is in the sequence.
      this.userClickCount = 0;
      // What the player's score is
      this.round = 0;
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
      // $('#score-counter').html(this.round);
      var ourSequence = this.sequence;
      var i = 0;

      var intervalID = setInterval(function(){
        if (i >= ourSequence.length) {
          clearInterval(intervalID);
          return;
        }
        // Turns on the light by adding class='light-on'
        $('#' + ourSequence[i]).addClass('light-on');


      setTimeout(function(){
        // Automatically turns off the light by removing the class
        $('button').removeClass('light-on');
      }, 700);

      i += 1;
    }, 2000);
  };

  SimonGame.prototype.nextRound = function () {
    this.addColor();
    this.showSequence();
    this.userClickCount = 0;

    this.round += 1;
    $('#score-counter').html(this.round);
      };


/* No more Coffee and Sugar */
