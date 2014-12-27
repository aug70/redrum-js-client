require('../../bootstrap.test.js');
var request = require('request');
var assert = require('assert');

describe('Sails tests', function() {

	it('user/facebook should return Facebook login Url', function(done) {
		request.get("http://localhost:1337/user/facebook", function(err, response, body) {
			assert(!err);
			assert(body);
			return done();
		})
	});

});