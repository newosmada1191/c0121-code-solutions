const fs = require('fs');

const appCommand = process.argv[2];

if (appCommand === 'read') {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    const noteValues = JSON.parse(data);
    let i = 1;
    for (i in noteValues.notes) {
      console.log(i + ':', noteValues.notes[i]);
      i++;
    }
  });
}

if (appCommand === 'create') {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    const userInput = process.argv[3];
    const parsedData = JSON.parse(data);
    const nextId = parsedData.nextId;
    parsedData.notes[nextId] = userInput;
    parsedData.nextId++;
    const newText = JSON.stringify(parsedData, null, 2);
    fs.writeFile('data.json', newText, 'utf8', err => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
  });
}

if (appCommand === 'update') {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    const parsedData = JSON.parse(data);
    const id = process.argv[3];
    const userInput = process.argv[4];
    parsedData.notes[id] = userInput;
    const newText = JSON.stringify(parsedData, null, 2);
    fs.writeFile('data.json', newText, 'utf8', err => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
  });
}
