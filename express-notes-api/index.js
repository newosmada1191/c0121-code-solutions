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
  const sendError = {};
  if (req.params.id < 0) {
    sendError.error = 'id must be a positive integer';
    res.status(400).json(sendError);
  } else if (!data.notes[req.params.id]) {
    sendError.error = `cannot find note with id ${req.params.id}`;
    res.status(404).json(sendError);
  } else {
    res.status(200).json(data.notes[req.params.id]);
  }
});

const parsedJSON = express.json();
app.use(parsedJSON);

app.post('/api/notes/', (req, res) => {
  const sendStatus = {};
  if (!req.body.content) {
    sendStatus.error = 'content is required';
    res.status(400).json(sendStatus);
  }
});
