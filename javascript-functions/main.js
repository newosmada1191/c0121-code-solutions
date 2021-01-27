function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

console.log('result of convertMinutesToSeconds:', convertMinutesToSeconds(5));

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

console.log('result of greet:', greet('Arthas'));

function getArea(width, height) {
  var area = width * height;
  return area;
}

console.log('result of getArea:', getArea(13, 37));

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

console.log('result of getFirstName:', getFirstName(
  {
    firstName: 'Arthas',
    lastName: 'Menethil'
  }
)
);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}

console.log('result of getLastElement:', getLastElement(
  [
    'Frostmourne',
    'Shadowmourne',
    'Ashbringer',
    'Warglaives'
  ]
)
);
