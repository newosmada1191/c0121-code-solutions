const pg = require('pg');
const express = require('express');
const app = express();
// eslint-disable-next-line no-console
console.log(app);

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

// eslint-disable-next-line no-console
console.log(db);
