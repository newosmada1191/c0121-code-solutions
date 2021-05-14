const pg = require('pg');
const express = require('express');
const app = express();
// eslint-disable-next-line no-console
console.log(app);
// eslint-disable-next-line no-console
console.log(pg);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening on port 3000!');
});
