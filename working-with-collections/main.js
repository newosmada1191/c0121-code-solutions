console.log('Lodash is loaded:', typeof _ !== 'undefined');

const players = [
  {
    player: 'Arthas',
    hand: [],
    score: 0
  },
  {
    player: 'Vegeta',
    hand: [],
    score: 0
  },
  {
    player: 'Elliot',
    hand: [],
    score: 0
  },
  {
    player: 'Saul Goodman',
    hand: [],
    score: 0
  }
];

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
  console.log('Value of cards:', cards);
  return cards;
}

deck();
console.log(players);
