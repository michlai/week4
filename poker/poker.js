// DO NOT CHANGE THE CODE BETWEEN HERE AND LINE 30

// function to shuffle (randomize the order of) an array
// e.g. myArray.shuffle()
Array.prototype.shuffle = function() {
  var currentIndex = this.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this[currentIndex];
    this[currentIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }
  return this;
}

// returns something representing a deck of cards... try it in the console, you'll see
// e.g. window.getDeck()
window.getDeck = function() {
  var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var cards = [];
  ranks.forEach(function(rank, index) {
    suits.forEach(function(suit, index) {
      cards.push(rank + "_of_" + suit);
    });
  });
  return cards;
}
// END DO NOT CHANGE CODE

$(function() {
  // Your code goes here!
  $(".btn.btn-success.deal").on("click", function(event) {
    event.preventDefault();
    shuffled = window.getDeck().shuffle()
    $("#c1").attr('src',"http://golearntocode.com/images/cards/" + shuffled[1] + ".png");
    $("#c2").attr('src',"http://golearntocode.com/images/cards/" + shuffled[2] + ".png");
    $("#c3").attr('src',"http://golearntocode.com/images/cards/" + shuffled[3] + ".png");
    $("#c4").attr('src',"http://golearntocode.com/images/cards/" + shuffled[4] + ".png");
    $("#c5").attr('src',"http://golearntocode.com/images/cards/" + shuffled[5] + ".png");
  });
})
