'use strict';

require('../../bootstrap.test.js');

describe('Redrum app services test.', function(){

	var httpBackend, redrumAppServices;

	beforeEach(function() {
		module('redrumApp');
		inject(function($httpBackend, _redrumAppServices_) {
			httpBackend = $httpBackend;
			redrumAppServices = _redrumAppServices_;
		});
	});

	afterEach(function() {
		httpBackend.verifyNoOutstandingExpectation();
		httpBackend.verifyNoOutstandingRequest();
	});

	it('dashboard function', function(){

		var returnData = {
		  "budget": {
		    "box_header": "$5,000.00",
		    "box_text": "In your budget",
		    "box_label": "0 items in your shopping cart",
		    "box_link": "/market"
		  },
		  "stats": {
		    "box_header": "Check",
		    "box_text": "Your results",
		    "box_label": "See your achievements! ",
		    "box_link": "/stats"
		  },
		  "profile": {
		    "box_header": "Change",
		    "box_text": "Your profile information",
		    "box_label": "Edit your profile! ",
		    "box_link": "/profile"
		  },
		  "product": {
		    "box_header": "Browse",
		    "box_text": "Products available in the market",
		    "box_label": "Check out the Market! ",
		    "box_link": "/market#products"
		  },
		  "redeem": {
		    "box_header": "Redeem",
		    "box_text": "Codes and add to your credit",
		    "box_label": "Use coupons for game credit! ",
		    "box_link": "/market#redeem"
		  },
		  "buy": {
		    "box_header": "Buy",
		    "box_text": "Game credit",
		    "box_label": "Add money to your budget! ",
		    "box_link": "/market#credit"
		  },
		  "shop": {
		    "box_header": "Shop",
		    "box_text": "Add more products to your inventory",
		    "box_label": "Buy gear for your next case! ",
		    "box_link": "/market#cart"
		  },
		  "game": {
		    "box_header": "Solve",
		    "box_text": "A murder now",
		    "box_label": "You can do this! ",
		    "box_link": "/game"
		  },
		  "recommended": {
		    "box_header": "Know",
		    "box_text": "What's recommended for you?",
		    "box_label": "See your recommendations! ",
		    "box_link": "/market#recommended"
		  }
		};


		httpBackend.expectGET('/api/dashboard').respond(returnData);

		var returnedPromise = redrumAppServices.dashboard();
		var result;
    	returnedPromise.then(function(response) {
      		result = response;
    	});
    	console.log('Result: ' + result);
		httpBackend.flush();
		expect(result).toEqual(returnData);
	});
});