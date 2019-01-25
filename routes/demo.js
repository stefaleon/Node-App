const express = require('express');

const router = express.Router();

router.get('/get-sometext', (req, res, next) => {
  res.send('<form action="/log-posted-text" method="POST"><input type="text" name="sometext"/><button type="submit">Post</button></form>');  
});

router.post('/log-posted-text', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});


module.exports = router;