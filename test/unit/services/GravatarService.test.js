'use strict';

require('../../bootstrap.test.js');
var assert = require('assert');
var gravatarService = require('../../../api/services/GravatarService');

describe('Gravatar service tests', function() {

	it('Get gravatar url for valid email with gravatar account.', function(done) {
		
		var gravatarUrl = 'f80458f2d18e6a15989e1588ee1e3093';
		var email = 'aug70co@gmail.com';
		gravatarService.getGravatarUrl(email, function(result){
			console.log(result);
			assert.equal(result.indexOf(gravatarUrl)>=0, true);
			done();
		});

	});

	it('Get gravatar url for email without gravatar account.', function(done) {
		
		var gravatarUrl = 'd8c3038fbd4560f19a2206071e8a9106';
		var email = 'unknown.email@some.domain.in.somewhere.com';
		gravatarService.getGravatarUrl(email, function(result){
			console.log(result);
			assert.equal(result.indexOf(gravatarUrl)>=0, true);
			done();
		});

	});

});



