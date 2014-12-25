'use strict';

var Sails = require('sails');
var assert = require('assert');
var redrumApiService = require('../api/services/RedrumApiService');

describe('Redrum API Service tests', function() {

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

	it('isApiOffline method should return false', function(done) {

		RedrumApiService.isApiOffline(function(result) {
			assert.equal(result, false);
			return done();
		})
	});

	it('getAccessToken method should return a valid "access_token"', function(done) {

		RedrumApiService.getAccessToken('tester','121212', function(access_token) {
			assert.notDeepEqual(access_token, 'ERROR');
			assert.notDeepEqual(access_token, undefined);
			assert.equal(typeof(access_token), 'string');
			return done();
		})
	});

	it('invokeEndPoint method should return a valid value', function(done) {

		RedrumApiService.invokeEndPoint('/products','GET', function(result) {
			assert.notDeepEqual(result, 'ERROR');
			assert.notDeepEqual(result, undefined);
			//assert.equal(typeof(access_token), 'string');
			return done();
		})
	});	

});