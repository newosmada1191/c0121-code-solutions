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
  for (let m = 0; m < players.length; m++) {
    for (let n = 0; n < players[0].hand.length; n++) {
      if (players[m].hand[n].score === 'J' || players[m].hand[n].score === 'Q' || players[m].hand[n].score === 'K') {
        players[m].hand[n].value = 10;
      } else if (players[m].hand[n].score === 'A') {
        players[m].hand[m].value = 11;
      }
      players[m].score = players[m].hand[0].value + players[m].hand[1].value;
    }
  }
}

dealCards();
