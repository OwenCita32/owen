// File: server.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/sapa', (req, res) => {
  res.send('Halo Client, ini Server!');
});

app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});
