var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/game/balls/q1', function(req, res, next) {
  res.send("What is 9+10");
});

module.exports = router;
