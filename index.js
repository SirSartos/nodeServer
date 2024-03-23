const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 3000;

var image = [];

app.post('/saveImage', (req, res) => {
  const imageUrl = JSON.stringify(req.body);
  image.push(imageUrl);
  console.log(req.body);
  // fs.appendFile('savedImages.txt', imageUrl, (err) =>{
  //   if(err) throw err;
  // });
  res.send('Daten erfolgreich gespeichert');
});

app.get('/getImage', (req, res)=>{
    res.send(image);
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
  });
}

// var express = require('express')
// var cors = require('cors')
// var app = express()

// app.use(cors())

// app.get('/products/:id', function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })

// app.listen(80, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })
