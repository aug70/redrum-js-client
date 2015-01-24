
module.exports = {

    invokeEndPoint : function(req, endPoint, method, cb) {
    	
		var RedrumSDK = require('redrum-js-sdk');

		var config = {
			clientId : sails.config.redrumConfig.clientId,
			clientSecret : sails.config.redrumConfig.clientSecret,
			debug : sails.config.redrumConfig.debug
		};
		
		var redrumSDK = new RedrumSDK(config);
		// console.log('Invoking end point with');
		// console.log('User name: ', req.session.username);
		// console.log('Password: ', req.session.password);

		redrumSDK.getAccessToken(req.session.username, req.session.password, 
			function(accessToken){
				//console.log('Access Token: ', accessToken);
				redrumSDK.invokeEndPoint(endPoint, method, accessToken, cb);	
		});
    	
	},

	isApiOffline : function(cb) {

		var RedrumSDK = require('redrum-js-sdk');

		var config = {
			clientId : sails.config.redrumConfig.clientId,
			clientSecret : sails.config.redrumConfig.clientSecret,
			debug : sails.config.redrumConfig.debug
		};

		var redrumSDK = new RedrumSDK(config);
		redrumSDK.siteOffline(cb);
	},

	getAccessToken : function(username, password, cb) {
		
		var RedrumSDK = require('redrum-js-sdk');

		var config = {
			clientId : sails.config.redrumConfig.clientId,
			clientSecret : sails.config.redrumConfig.clientSecret,
			debug : sails.config.redrumConfig.debug
		};

		var redrumSDK = new RedrumSDK(config);
		redrumSDK.getAccessToken(username, password, cb);

	},

	register : function(userData, cb) {
		var RedrumSDK = require('redrum-js-sdk');
		var config = {
			clientId : sails.config.redrumConfig.clientId,
			clientSecret : sails.config.redrumConfig.clientSecret,
			debug : sails.config.redrumConfig.debug
		};
		var redrumSDK = new RedrumSDK(config);
		redrumSDK.register(userData, cb);
	}

};
