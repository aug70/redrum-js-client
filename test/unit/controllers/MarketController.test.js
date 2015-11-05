require('../../bootstrap.test.js');
var request = require('request');
var assert = require('assert');

describe('Market controller tests', function() {


	it('Default market page', function(done) {

		request.get("http://localhost:1337/market", function(err, response, body) {
			assert(!err);
			assert(body);
			return done();
		});
	});

});