const express = require('express');
const path = require('path');
const port = 3000;
const app = express();
const publicPath = path.join(__dirname, 'public');
const staticMiddleware = express.static(publicPath);

app.use(staticMiddleware);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Express server listening at http://localhost:${port}`);
});
