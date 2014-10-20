var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	var path = '/dashboard';
	console.log('Response redirect path: ' + path);
    res.redirect(path);
});

router.get('/:page', function(req, res) {
	var path = req.param('page');
	console.log('Response render path: ' + path);
	res.render(path);
});


router.get('/:dir/:page', function(req, res) {
	var path = req.param('dir')+'/'+req.param('page');
	console.log('Response render path: ' + path);
    res.render(req.param('dir')+'/'+req.param('page'));
});

module.exports = router;
