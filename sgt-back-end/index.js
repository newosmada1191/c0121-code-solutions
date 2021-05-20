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
      res.status(200).json(success.rows);
    })
    .catch(error => {
      console.error(`error ${error}`);
      res.sendStatus(500);
    });
});
