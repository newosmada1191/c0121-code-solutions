const fs = require('fs')

if (process.argv[2] === 'read') {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    let noteValues = JSON.parse(data)
    for (i in noteValues.notes) {
      console.log(i + ':', noteValues.notes[i]);
      i++
    }
  })
}
