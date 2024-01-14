var express = require('express');
var router = express.Router();
const user = require('../controller/UserController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', user.login)
router.post('/signup', user.registerUser)


module.exports = router;
