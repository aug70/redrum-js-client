'use strict';

require('../../bootstrap.test.js');
var assert = require('assert');
var alertService = require('../../../api/services/AlertService');

describe('Alert service tests', function() {

	it('Add and consume alerts.', function() {
		
		var message = 'Some alert message';
		alertService.addAlert(null, message);
		var result = alertService.consumeAlert(null);

		console.log(result);

		assert.equal(result.length, 1);
		assert.equal(result[0].message, message);
	});

});