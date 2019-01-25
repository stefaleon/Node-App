const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {    
  console.log('Middleware demo, log the time... Time:', Date.now());
  next();
});

app.use((req, res, next) => {  
  console.log('Next step, send a greeting...');
  return res.send('Ohai!');
  next(); // this never executes since I return the response I send...
});

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`App listening on port ${port}.`))