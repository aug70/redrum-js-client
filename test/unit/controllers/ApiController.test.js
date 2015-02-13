require('../../bootstrap.test.js');
var request = require('request');
var assert = require('assert');
//var sinon = require('sinon');

describe('Api controller tests', function() {

	it('Api dashboard', function(done) {

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
	// 	})
		done();
	});

	// it('Api user', function(done) {

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
	// 	})
	// });

});