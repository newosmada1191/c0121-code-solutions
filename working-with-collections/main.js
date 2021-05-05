console.log('Lodash is loaded:', typeof _ !== 'undefined');

function Card(value, name, suit) {
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
      cards.push(new Card(j + 2, this.names[j], this.suits[i]));
    }
  }
  return cards;
}

// function player(name, hand, score) {
//   this.name = name;
//   this.hand = hand;
//   this.score = score;
// }

const players = {
  Arthas: {
    hand: [],
    score: 0
  },
  Elliot: {
    hand: [],
    score: 0
  },
  SaulGoodman: {
    hand: [],
    score: 0
  },
  Vegeta: {
    hand: [],
    score: 0
  }
};

function playerScore() {
  const shuffledDeck = _.shuffle(deck());
  console.log(shuffledDeck);
}

console.log(players);
console.log(playerScore());
