// The Math Object

var numOne = 1.337;

var numTwo = 13.37;

var numThree = 133.7;

var maximumValue = Math.max(numOne, numTwo, numThree);

console.log('The value of maximumValue:', maximumValue);

var heroes = ['The Punisher', 'Captain America', 'Venom', 'Luke Cage'];

var randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('The value of randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('The value of randomHero:', randomHero);

// Array Methods

var library = [
  {
    title: 'Cirque du Freak',
    author: 'Darren Shan'
  },
  {
    title: 'John Carter of Mars',
    author: 'Edgar Rice Burroughs'
  },
  {
    title: 'Pendragon',
    author: 'D.J. MacHale'
  }
];

var lastBook = library.pop();

console.log('The value of lastBook:', lastBook);

var firstBook = library.shift();

console.log('The value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);

library.unshift(css);

library.splice(0, 1);

console.log('The value of library', library);

// String Methods

var fullName = 'Owen Adams';

var firstAndLastName = fullName.split(' ');

console.log('The value of firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('The value of sayMyName:', sayMyName);
