const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const x = parseFloat(process.argv[2]);
const operation = process.argv[3];
const y = parseFloat(process.argv[4]);

if (operation === 'plus') {
  console.log('Result:', add(x, y));
} else if (operation === 'minus') {
  console.log('Result:', subtract(x, y));
} else if (operation === 'times') {
  console.log('Result:', multiply(x, y));
} else if (operation === 'over') {
  console.log('Result:', divide(x, y));
} else {
  console.log('Invalid Operation');
}
