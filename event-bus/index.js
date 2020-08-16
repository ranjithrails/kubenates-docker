'use strict';
const express = require('express');
// Constants
const PORT = 5000;
const app = express();
app.get('/event-bus', (req, res) => {
  console.log('event bus app');
  res.send('event bus app');
});
app.listen(PORT, () => {
  console.log("event bus appln...");
  console.log(`Example app listening at http://localhost:${PORT}`)
});