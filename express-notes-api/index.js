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
    res.json(noteArray);
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
    if (Math.sign(id) === -1) {
      res.send(intErr);
    } else if (!noteId) {
      res.send(missErr);
    } else {
      res.json(noteId);
    }
  });
});
