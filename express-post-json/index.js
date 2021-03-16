const express = require('express');
const app = express();
const grades = {};
let nextId = 1;

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening on port 3000!');
});

app.get('/api/grades', (req, res, next) => {
  const gradesArray = [];
  for (const id in grades) {
    gradesArray.push(grades[id]);
  }
  res.json(gradesArray);
});

app.use(express.json());

app.post('/api/grades', (req, res, next) => {
  req.body.id = nextId;
  grades[nextId] = req.body;
  nextId++;
  res.sendStatus(204);
});
