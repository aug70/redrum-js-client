var Sails = require('sails');
var request = require('request');
var assert = require('assert');

describe('Sails tests', function() {

	var sails;

	before(function(done) {
		this.timeout(5000);
		(new Sails.constructor()).lift({log: {level: 'silent'}}, function(err, _sails) {
			sails = _sails;
			return done(err);
		});

	});


	after(function(done) {
		sails.lower(done);
	})

	it('user/facebook should return Facebook login Url', function(done) {
		request.get("http://localhost:1337/user/facebook", function(err, response, body) {
			assert(!err);
			assert(body);
			//console.log(body);
			return done();
		})
	});

});