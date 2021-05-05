console.log('Lodash is loaded:', typeof _ !== 'undefined');

function card(value, name, suit) {
  this.value = value;
  this.name = name;
  this.suit = suit;
}

function deck() {
  this.names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  this.suits = ['Clubs', 'Diamonds', 'Hears', 'Spades'];
  const cards = [];
  for (let i = 0; i < this.suits.length; i++) {
    for (let j = 0; j < this.names.length; j++) {
      // eslint-disable-next-line new-cap
      cards.push(new card(j + 1, this.names[j], this.suits[i]));
    }
  }
  return cards;
}

deck();

const shuffledDeck = _.shuffle(deck());
console.log(shuffledDeck);

// function player(name, hand, score) {
//   this.name = name;
//   this.hand = hand;
//   this.score = score;
// }

function players() {
  this.names = ['Arthas', 'Vegeta', 'Elliot', 'Saul Goodman'];
  this.hand = [];
}

console.log(players);
// console.log(player);
