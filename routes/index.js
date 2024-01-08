var express = require('express');
var router = express.Router();
const user = require('../controller/UserController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', user.ceklogin, user.login)


module.exports = router;
