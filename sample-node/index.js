'use strict';
const express = require('express');
const axios = require('axios');

// Constants
const PORT = 4000;
const app = express();
app.get('/posts', async (req, res) => {
  await axios.get('http://event-bus-clusterip-srv:5000/event-bus')
  res.send('Docker and Nodejs implementation');
});
app.listen(PORT, () => {
  console.log("updated 4th approach version....");
  console.log(`Example app listening at http://localhost:${PORT}`)
});