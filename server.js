// require('dotenv').config({ path: '../config/.env' });
const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Handles any requests that don't match the ones above
// console.log(`bdir namr is :${__dirname}`);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, `build/index.html`));
});
app.disable('etag');
const port = process.env.PORT || 5050;
app.listen(port);

console.log(`App is listening on port ${port}`);
