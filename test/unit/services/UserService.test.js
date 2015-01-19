'use strict';

require('../../bootstrap.test.js');
var assert = require('assert');
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
		
		var data = { id: '6634254994',
			email: 'user@facebook.com',
			first_name: 'Otto',
			gender: 'male',
			last_name: 'Frank',
			link: 'http://www.facebook.com/6634254994',
			locale: 'en_US',
			name: 'Otto Frank',
			timezone: +1,
			updated_time: '2014-10-12T04:08:30+0000',
			verified: true };

		var result = userService.signInOrRegister(data);

		assert.equal(result.message, 'You signed in successfully.');
		assert.equal(result.nextStep, '/dashboard');
		done();
	});

	it('Test sign in no email.', function(done) {
		
		var data = { id: '6634254994',
			first_name: 'Otto',
			gender: 'male',
			last_name: 'Frank',
			link: 'http://www.facebook.com/6634254994',
			locale: 'en_US',
			name: 'Otto Frank',
			timezone: +1,
			updated_time: '2014-10-12T04:08:30+0000',
			verified: true };

		var result = userService.signInOrRegister(data);

		assert.equal(result.message, 'There was a problem using your facebook account.');
		assert.equal(result.nextStep, '/signin');
		done();
	});



});