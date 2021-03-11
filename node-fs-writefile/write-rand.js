const fs = require('fs');

const randomNumber = String(Math.random()) + '\n';

fs.writeFile('random.txt', randomNumber, 'utf8', (err) => {
  if (err) throw err;
})
