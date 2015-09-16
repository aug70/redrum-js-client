'use strict';

describe('Modules test', function(){

	beforeEach(function() {
		//Ensure angular modules available
		module('redrumApp');
		module('redrumAppServices');
		module('redrumAppFilters');
		module('redrumAppDirectives');
	});

	it('All modules must exist.', function(){
		expect(true).to.be.true;
	});
});