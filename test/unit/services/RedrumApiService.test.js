'use strict';

require('../../bootstrap.test.js');
var assert = require('assert');
var uuid = require('node-uuid');
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
		});
	});

	it('invokeEndPoint method should return a valid value', function(done) {
		var req = {
			session : {
				userName: 'tester',
				password: '121212'
			}
		};
		redrumApiService.invokeEndPoint(req, '/products','GET', function(result) {
			assert.notDeepEqual(result, 'ERROR');
			assert.notDeepEqual(result, undefined);
			//assert.equal(typeof(access_token), 'string');
			return done();
		});
	});

	it('register user', function(done) {

		var guid = uuid.v1().replace(/-/g, '').substring(0,10);
		//console.log('guid: ' + guid);
		assert.equal(guid.length>=6 && guid.length<=15, true);

		var userData = {
			'userName' : guid,
			'firstName' : 'Albert',
			'lastName' : 'Einstein',
			'email' : guid + '@redrum.us',
			'password' : 'password',
			'providerClientId' : 'redrum-js-demo',
			'origin' : 'facebook',
			'originUserId' : guid
		};

		redrumApiService.register(userData, function(result) {
			assert.equal(result, true);
			return done();
		})
	});


});