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

const deck = {
  suites: ['clubs', 'diamonds', 'hearts', 'spades'],
  cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 'jack', 'queen', 'king', 'ace']
};

console.log(players);
console.log(deck);
