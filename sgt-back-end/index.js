const pg = require('pg');
const express = require('express');
const app = express();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening on port 3000!');
});

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
  select *
    from "grades"
    `;
  db.query(sql)
    .then(success => {
      res.status(200)
        .json(success.rows);
    })
    .catch(error => {
      console.error(`error ${error}`);
      res.sendStatus(500);
    });
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const sendStatus = {};
  if (!req.body.name || !req.body.course || !req.body.score) {
    sendStatus.error = 'name, course, and score are required';
    res.status(400)
      .json(sendStatus);
    return;
  }
  const sql = `
    insert into "grades" ("name","course","score")
    values (
      $1,
      $2,
      $3
    )
    returning *
  `;
  const values = [req.body.name, req.body.course, req.body.score];
  db.query(sql, values)
    .then(success => {
      const grade = success.rows[0];
      res.status(200)
        .json(grade);
    })
    .catch(error => {
      console.error(`error ${error}`);
      sendStatus.error = 'an unexpected error occurred';
      res.status(500)
        .json(sendStatus);
    });
});

const test01 = 'test01';
// eslint-disable-next-line no-console
console.log(test01);
