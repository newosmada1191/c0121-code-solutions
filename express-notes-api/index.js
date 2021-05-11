const express = require('express');
const data = require('./data.json');
const fs = require('fs');
const app = express();
// eslint-disable-next-line no-console
console.log(express);
// eslint-disable-next-line no-console
console.log(fs);
// eslint-disable-next-line no-console
console.log(app);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening on port 3000!');
});

app.get('/api/notes', (req, res) => {
  const jsonArray = [];
  for (const key in data.notes) {
    jsonArray.push(data.notes[key]);
  }
  res.status(200).json(jsonArray);
});
