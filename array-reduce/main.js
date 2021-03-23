const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((acc, cur) => acc + cur);
console.log(`The sum of numbers: ${sum}`);

const product = numbers.reduce((acc, cur) => acc * cur);
console.log(`The product of numbers: ${product}`);

const balance = account.reduce((bal, trans) => {
  if (trans.type === 'deposit') {
    bal += trans.amount;
  } else if (trans.type === 'withdrawal') {
    bal -= trans.amount;
  }
  return bal;
}, 0);
console.log(`The Balance of Account is: ${balance}`);

const composite = traits.reduce((composite, trait) => {
  return Object.assign(composite, trait);
}, {});
console.log('Composite result:', composite);
