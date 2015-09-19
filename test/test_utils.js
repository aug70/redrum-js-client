'use strict';

var request = require('request');
var assert = require('assert');
var uuid = require('node-uuid');
var userService = require('../api/services/UserService');


module.exports = {

	login : function(cb) {
		var guid = uuid.v1().replace(/-/g, '').substring(0,10);
		var data = { id: guid,
			email: 'user.' + guid + '@redrum.com',
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
			
			// request.session = {authenticated: true};
			// request.session = function() {
			// 	console.log('Session authenticated called.');
			// 	return {authenticated: true};
			// }
			assert.equal(request.session.authenticated, true);
			cb();
		});

		
	}
}