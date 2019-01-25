const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const demoRoutes = require('./routes/demo');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(demoRoutes);

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`App listening on port ${port}.`))