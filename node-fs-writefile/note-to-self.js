const fs = require('fs');

const noteText = String(process.argv[2]) + '\n';

fs.writeFile('note.txt', noteText, 'utf8', (err) => {
  if (err) throw err;
})
