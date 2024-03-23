const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/saveImage', (req, res) => {

  const data = req.body;
 
  console.log('Empfangene Daten:', data);
  res.send('Daten erfolgreich gespeichert');
});