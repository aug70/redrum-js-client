require('../../bootstrap.test.js');
var request = require('request');
var assert = require('assert');
var utils = require('../../test_utils.js');

describe('Api controller tests', function() {


	// beforeEach(function() {
	// 	request.session = {authenticated: true};
	// });

	// it('Api dashboard', function(done) {

	// 	request.get("http://localhost:1337/api/dashboard", function(err, response, body) {
	// 		assert(!err);
	// 		console.log(body);
	// 		var resultJSON = JSON.parse(body);
	// 		assert.equal(resultJSON.hasOwnProperty("budget"), true);
	// 		assert.equal(resultJSON.hasOwnProperty("stats"), true);
	// 		assert.equal(resultJSON.hasOwnProperty("profile"), true);
	// 		assert.equal(resultJSON.hasOwnProperty("product"), true);
	// 		assert.equal(resultJSON.hasOwnProperty("redeem"), true);
	// 		assert.equal(resultJSON.hasOwnProperty("buy"), true);
	// 		assert.equal(resultJSON.hasOwnProperty("shop"), true);
	// 		assert.equal(resultJSON.hasOwnProperty("game"), true);
	// 		assert.equal(resultJSON.hasOwnProperty("recommended"), true);
	// 		return done();
	// 	});
	// });

	// it('Api user - no login', function(done) {

	// 	request.get("http://localhost:1337/api/user", function(err, response, body) {
	// 		assert(!err);
	// 		console.log(body);
	// 		var resultJSON = JSON.parse(body);
	// 		assert.equal(resultJSON.hasOwnProperty("userName"), true);
	// 		assert.equal(resultJSON.hasOwnProperty("fullName"), true);
	// 		assert.equal(resultJSON.hasOwnProperty("email"), true);
	// 		assert.equal(resultJSON.hasOwnProperty("memberSince"), true);
	// 		assert.equal(resultJSON.hasOwnProperty("status"), true);
	// 		assert.equal(resultJSON.hasOwnProperty("budget"), true);
	// 		assert.equal(resultJSON.hasOwnProperty("inventorySize"), true);
	// 		assert.equal(resultJSON.hasOwnProperty("cartSize"), true);
	// 		assert.equal(resultJSON.hasOwnProperty("ordersSize"), true);
	// 		assert.equal(resultJSON.hasOwnProperty("statistics"), true);
	// 		assert.equal(resultJSON.hasOwnProperty("avatar"), true);
	// 		return done();
	// 	});
	// });


	// it('Api game - get levels', function(done) {

	// 	utils.login(function() {
	// 		request.get("http://localhost:1337/api/gameLevels", function(err, response, body) {
	// 			assert(!err);
	// 			console.log(body);
	// 			var resultJSON = JSON.parse(body);
	// 			return done();
	// 		});
	// 	});
	// });

});