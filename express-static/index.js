const express = require('express');
const path = require('path');
const port = 3000;
const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Express server listening at http://localhost:${port}`);
});
