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

function Players(name, hand, score) {
  this.name = name;
  this.hand = hand;
  this.score = score;
}

function playerScore() {
  const shuffledDeck = _.shuffle(deck());
  console.log(shuffledDeck);
  console.log(shuffledDeck.length);
  this.names = ['Arthas', 'Elliot Alderson', 'Saul Goodman', 'Vegeta'];
  this.hand = [];
  const hands = [];
  for (let k = 0; k < this.names.length; k++) {
    hands.push(new Players(this.names[k], 'test', 'test'));
  }
  return hands;
}

console.log(playerScore());
