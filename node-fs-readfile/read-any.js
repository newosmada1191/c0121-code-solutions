const fs = require('fs');

const textFile = process.argv[2];

  fs.readFile(textFile, 'utf8', (err, data) => {
    console.log(data);
  })
