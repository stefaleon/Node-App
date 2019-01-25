const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/get-sometext', (req, res, next) => {
  res.send('<form action="/log-posted-text" method="POST"><input type="text" name="sometext"/><button type="submit">Post</button></form>');  
});

app.post('/log-posted-text', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`App listening on port ${port}.`))