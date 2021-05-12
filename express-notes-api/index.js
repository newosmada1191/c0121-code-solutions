const express = require('express');
const data = require('./data.json');
const fs = require('fs');
const app = express();

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
  const sendStatus = {};
  if (req.params.id < 0) {
    sendStatus.error = 'id must be a positive integer';
    res.status(400).json(sendStatus);
  } else if (!data.notes[req.params.id]) {
    sendStatus.error = `cannot find note with id ${req.params.id}`;
    res.status(404).json(sendStatus);
  } else {
    res.status(200).json(data.notes[req.params.id]);
  }
});

app.use(express.json());

app.post('/api/notes/', (req, res) => {
  let sendStatus = {};
  if (!req.body.content) {
    sendStatus.error = 'content is required';
    res.status(400).json(sendStatus);
  } else {
    data.notes[data.nextId] = req.body;
    data.notes[data.nextId].id = data.nextId;
    sendStatus = data.notes[data.nextId];
    data.nextId++;
    const jsonString = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', jsonString, 'utf8', err => {
      if (err) {
        sendStatus.error = 'an unexpected error occured';
        res.status(500).json(sendStatus);
      } else {
        res.status(201).json(sendStatus);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const sendStatus = {};
  if (req.params.id < 0) {
    sendStatus.error = 'id must be a positive integer';
    res.status(400).json(sendStatus);
  } else if (!data.notes[req.params.id]) {
    sendStatus.error = `id number of ${req.params.id} does not exist`;
    res.status(404).json(sendStatus);
  } else {
    delete data.notes[req.params.id];
    res.status(204);
  }
});
