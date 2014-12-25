module.exports = {

    invokeEndPoint : function(endPoint, method, cb) {
    	var RedrumSDK = require('redrum-js-sdk');
		var config = {
			clientId : sails.config.redrumConfig.clientId,
			clientSecret : sails.config.redrumConfig.clientSecret,
			debug : sails.config.redrumConfig.debug
		};

		var redrumSDK = new RedrumSDK(config);
		redrumSDK.getAccessToken('tester', '121212', 
			function(accessToken){
				redrumSDK.invokeEndPoint(endPoint, method, accessToken, cb);	
		});
    	
	},

	isApiOffline : function(cb) {
		var RedrumSDK = require('redrum-js-sdk');
		var config = {
			clientId : sails.config.redrumConfig.clientId,
			clientSecret : sails.config.redrumConfig.clientSecret
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

	}

};
