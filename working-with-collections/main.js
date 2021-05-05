console.log('Lodash is loaded:', typeof _ !== 'undefined');

function Card(value, score, suit) {
  this.value = value;
  this.score = score;
  this.suit = suit;
}

function deck() {
  this.score = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  this.suits = ['Clubs', 'Diamonds', 'Hears', 'Spades'];
  const cards = [];
  for (let i = 0; i < this.suits.length; i++) {
    for (let j = 0; j < this.score.length; j++) {
      cards.push(new Card(j + 2, this.score[j], this.suits[i]));
    }
  }
  return cards;
}

const shuffledDeck = _.shuffle(deck());

const players = [
  {
    name: 'Arthas',
    hand: [],
    score: 0
  },
  {
    name: 'Elliot Alderson',
    hand: [],
    score: 0
  },
  {
    name: 'Saul Goodman',
    hand: [],
    score: 0
  },
  {
    name: 'Vegeta',
    hand: [],
    score: 0
  }
];

function dealCards() {
  let k = 0;
  for (let l = 0; l < players.length * 2; l++) {
    if (k === 4) {
      k = 0;
    }
    players[k].hand.push(shuffledDeck[l]);
    k++;
  }
}

dealCards();
