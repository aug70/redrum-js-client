'use strict';

require('../../bootstrap.test.js');
var assert = require('assert');
var cacheService = require('../../../api/services/CacheService');

describe('Cache Service tests', function() {

	it('Cache add, hasKey, get and delete methods tests.', function() {

		var key = 'My Key'
		var value = 'My Value';
		
		assert.equal(cacheService.hasKey(key), false);
		cacheService.add(key, value);
		assert.equal(cacheService.hasKey(key), true);
		assert.equal(cacheService.get(key), value);
		cacheService.remove(key);
		assert.equal(cacheService.hasKey(key), false);
	});

	it('Cache service make key test.', function() {
		var prefix = 'prefix';
		var result = cacheService.makeKey(null, prefix);
		assert.equal(result, 'prefix_12318465');
	});

});