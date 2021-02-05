var arrayObjects = [
  {
    isbn: '978-3-16-148410-0',
    title: 'I am a Book',
    author: 'Tree'
  },
  {
    isbn: '133-7-23-146510-9',
    title: 'I AM BOOK',
    author: 'BOOK'
  },
  {
    isbn: '113-9-69-148470-3',
    title: 'Book I am',
    author: 'Doya'
  }
];
console.log('value of arrayObjects:', arrayObjects);
console.log('typeof arrayObjects:', typeof arrayObjects);

var $stringify = JSON.stringify(arrayObjects);
console.log('value of $stringify:', $stringify);
console.log('typeof $stringify:', typeof $stringify);

var $json = '{"student": "Owen Adams", "numberID": 1337}';
console.log('value of $json:', $json);
console.log('typeof $json:', typeof $json);

var $parse = JSON.parse($json);
console.log('value of $parse:', $parse);
console.log('typof $parse:', typeof $parse);
