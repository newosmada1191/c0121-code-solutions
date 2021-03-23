const express = require('express');
const fs = require('fs');
const app = express();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening on port 3000!');
});

app.get('/api/notes', (req, res) => {
  const noteArray = [];
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    const noteValues = JSON.parse(data);
    for (const id in noteValues.notes) {
      noteArray.push(noteValues.notes[id]);
    }
    res.status(200).json(noteArray);
  });
});

app.get('/api/notes/:id', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    const noteValues = JSON.parse(data);
    const id = req.params.id;
    const noteId = noteValues.notes[id];
    const intErr = { error: 'id must be a positive integer' };
    const missErr = { error: `cannot find note with id ${id}` };
    if (Math.sign(id) < 0) {
      res.status(400).send(intErr);
    } else if (!noteId) {
      res.status(404).send(missErr);
    } else {
      res.status(200).json(noteId);
    }
  });
});

const parsedJSON = express.json();
app.use(parsedJSON);

app.post('/api/notes/', (req, res) => {
  fs.writeFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    const noteValues = JSON.parse(data);
    let id = req.body.id;
    const noteId = noteValues.notes[id];
    id++;
    res.status(201).json(noteId);
    if (!req.body) {
      res.status(400).json({
        error: 'content is a required field'
      });
    } else if (!req) {
      res.status(500).json({
        error: 'An unexpected error occured'
      });
    }
  });
});
