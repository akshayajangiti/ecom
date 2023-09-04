var express = require('express');
var router = express.Router();

var homepageController = function(req, res) {
  res.render('index', { title: 'Welcome to Loc8r' });
  };
  /* GET homepage. */
  router.get('/', homepageController);

module.exports = router;
