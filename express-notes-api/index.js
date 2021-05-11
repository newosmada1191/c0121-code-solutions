const express = require('express');
const data = require('./data.json');
const fs = require('fs');
const app = express();
// eslint-disable-next-line no-console
console.log(fs);

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

app.get('/api/notes/:id', (req, res) => {
  const noteById = {};
  if (req.params.id < 0) {
    noteById.error = 'id must be a positive integer';
    res.status(400).json(noteById);
  } else {
    res.status(200).json(data.notes[req.params.id]);
  }
});
