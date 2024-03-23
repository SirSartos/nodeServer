const express = require('express');
const app = express();
const port = 8080;
app.get('/', function (req, res) {
res.send('GET request to the homepage')
})
app.get('/about', function (req, res) {
res.send('about from the backend')
})
app.post('/', function (req, res) {
res.send('POST request to the homepage')
})
app.listen(port, () => console.log(`Server listening on port
${port}!`))