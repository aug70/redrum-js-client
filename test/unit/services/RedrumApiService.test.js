'use strict';

require('../../bootstrap.test.js');
var assert = require('assert');
var redrumApiService = require('../../../api/services/RedrumApiService');

describe('Redrum API Service tests', function() {

	it('isApiOffline method should return false', function(done) {

		RedrumApiService.isApiOffline(function(result) {
			assert.equal(result, false);
			return done();
		})
	});

	it('getAccessToken method should return a valid "access_token"', function(done) {

		redrumApiService.getAccessToken('tester','121212', function(access_token) {
			assert.notDeepEqual(access_token, 'ERROR');
			assert.notDeepEqual(access_token, undefined);
			assert.equal(typeof(access_token), 'string');
			return done();
		})
	});

	it('invokeEndPoint method should return a valid value', function(done) {

		redrumApiService.invokeEndPoint('/products','GET', function(result) {
			assert.notDeepEqual(result, 'ERROR');
			assert.notDeepEqual(result, undefined);
			//assert.equal(typeof(access_token), 'string');
			return done();
		})
	});	

});