'use strict';

describe('Redrum app services test.', function(){

	var redrumAppServices;

	beforeEach(function() {
		module('redrumApp');
		inject(function(_redrumAppServices_) {
			redrumAppServices = _redrumAppServices_;
		});
	});

	it('Should have an dashboard function', function(){
		expect(angular.isFunction(redrumAppServices.dashboard)).to.be.true;
	});

	it('Should have an user function', function(){
		expect(angular.isFunction(redrumAppServices.user)).to.be.true;
	});
	
	it('Should have an cart function', function(){
		expect(angular.isFunction(redrumAppServices.cart)).to.be.true;
	});
	
	it('Should have an products function', function(){
		expect(angular.isFunction(redrumAppServices.products)).to.be.true;
	});
	
	it('Should have an inventory function', function(){
		expect(angular.isFunction(redrumAppServices.inventory)).to.be.true;
	});
	
	it('Should have an stats function', function(){
		expect(angular.isFunction(redrumAppServices.stats)).to.be.true;
	});
	
	it('Should have an orders function', function(){
		expect(angular.isFunction(redrumAppServices.orders)).to.be.true;
	});
	
	it('Should have an alerts function', function(){
		expect(angular.isFunction(redrumAppServices.alerts)).to.be.true;
	});
	
	it('Should have an processCart function', function(){
		expect(angular.isFunction(redrumAppServices.processCart)).to.be.true;
	});
	
	it('Should have an redeemCoupon function', function(){
		expect(angular.isFunction(redrumAppServices.redeemCoupon)).to.be.true;
	});
	
	it('Should have an signInWithFaceBook function', function(){
		expect(angular.isFunction(redrumAppServices.signInWithFaceBook)).to.be.true;
	});
	
	it('Should have an signInWithGitHub function', function(){
		expect(angular.isFunction(redrumAppServices.signInWithGitHub)).to.be.true;
	});

});