'use strict';

require('../../bootstrap.test.js');
var assert = require('assert');
var alertService = require('../../../api/services/AlertService');

describe('Alert service tests', function() {

	it('Add and consume alerts.', function() {
		var req  = {
			session : {
				username : 'test-user'
			}
		};
		var message = 'Some alert message';
		alertService.addAlert(req, message);
		var result = alertService.consumeAlert(req);

		//console.log(result);

		assert.equal(result.length, 1);
		assert.equal(result[0].message, message);
	});

});