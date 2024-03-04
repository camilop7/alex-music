var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET bio page. */
router.get('/bio', function(req, res, next) {
  res.render('bio', { title: 'Bio' });
});

/* GET composer page. */
router.get('/composer', function(req, res, next) {
  res.render('composer', { title: 'Composer' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

/* GET community page. */
router.get('/community', function(req, res, next) {
  res.render('community', { title: 'Community & Events' });
});

module.exports = router;
