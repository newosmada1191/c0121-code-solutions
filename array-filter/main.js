const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(`Even Numbers: ${evenNumbers}`);

const overFive = numbers.filter(number => number > 5);

console.log(`Numbers greater than 5: ${overFive}`);

const startWithE = names.filter(name => name.startsWith('E'));

console.log(`Names that start with E: ${startWithE}`);

const haveD = names.filter(name => name.includes('d') || name.includes('D'));

console.log(`Names that include d or D: ${haveD}`);
