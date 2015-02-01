'use strict';

require('../../bootstrap.test.js');
var assert = require('assert');
var uuid = require('node-uuid');
var userService = require('../../../api/services/UserService');

describe('User service tests', function() {

	it('Test handle sign in error.', function(done) {
		
		var error = 'Some error';
		var result = userService.handleSignInError(error);

		assert.equal(result.message, 'There was a problem while processing your request.');
		assert.equal(result.nextStep, '/signin');
		done();
	});

	it('Test sign out.', function(done) {
		
		var result = userService.signOut();

		assert.equal(result.message, 'You signed out successfully.');
		assert.equal(result.nextStep, '/signin');
		done();
	});

	it('Test sign in.', function(done) {
		var guid = uuid.v1().replace(/-/g, '').substring(0,10);
		var data = { id: guid,
			email: guid + '@redrum.com',
			first_name: 'Test',
			gender: 'male',
			last_name: guid,
			link: 'http://www.facebook.com/' + guid,
			locale: 'en_US',
			name: guid,
			timezone: +1,
			updated_time: '2014-10-12T04:08:30+0000',
			verified: true };

		userService.signInOrRegister(data, function(result){
			assert.equal(result.message, 'You registered and signed in successfully.');
			assert.equal(result.nextStep, '/dashboard');
			done();
		});

	});

	it('Test sign in no email.', function(done) {
		var guid = uuid.v1().replace(/-/g, '').substring(0,10);
		var data = {
				id: guid,
				first_name: 'Test',
				gender: 'male',
				last_name: guid,
				link: 'http://www.facebook.com/' + guid,
				locale: 'en_US',
				name: guid,
				timezone: +1,
				updated_time: '2014-10-12T04:08:30+0000',
				verified: true
			};

		userService.signInOrRegister(data, function(result){
			assert.equal(result.message, 'Your facebook account email can not accessed.');
			assert.equal(result.nextStep, '/signin');
			done();
		});
	});


	it('Test sign in bad email.', function(done) {
		var guid = uuid.v1().replace(/-/g, '').substring(0,10);
		var data = {
				id: guid,
				email: guid,
				first_name: 'Test',
				gender: 'male',
				last_name: guid,
				link: 'http://www.facebook.com/' + guid,
				locale: 'en_US',
				name: guid,
				timezone: +1,
				updated_time: '2014-10-12T04:08:30+0000',
				verified: true
			};

		userService.signInOrRegister(data, function(result){
			assert.equal(result.message, 'There was an error creating user.');
			assert.equal(result.nextStep, '/signin');
			done();
		});
	});
});