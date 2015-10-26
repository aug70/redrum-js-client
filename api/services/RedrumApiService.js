var RedrumSDK = require('redrum-js-sdk');

module.exports = {

    invokeEndPoint : function(req, endPoint, method, cb) {
		

		var config = {
			clientId : sails.config.redrumConfig.clientId,
			clientSecret : sails.config.redrumConfig.clientSecret,
			debug : sails.config.redrumConfig.debug
		};

		var redrumSDK = new RedrumSDK(config);
		redrumSDK.getAccessToken(req.session.username, req.session.password, 
			function(accessToken){
				if(config.debug) {
					console.log('**************************************');
					console.log('End Point: ', endPoint);
					console.log('Method: ', method);
					if(config.trace) {
						console.log('User name: ', req.session.username);
						console.log('Password: ', req.session.password);
					}
					console.log('Access Token: ', accessToken);
					console.log('**************************************');
				}
				redrumSDK.invokeEndPoint(endPoint, method, accessToken, cb);	
		});
    	
	},

	isApiOffline : function(cb) {

		var config = {
			clientId : sails.config.redrumConfig.clientId,
			clientSecret : sails.config.redrumConfig.clientSecret,
			debug : sails.config.redrumConfig.debug
		};

		var redrumSDK = new RedrumSDK(config);

		redrumSDK.siteOffline(cb);
	},

	getAccessToken : function(username, password, cb) {

		var config = {
			clientId : sails.config.redrumConfig.clientId,
			clientSecret : sails.config.redrumConfig.clientSecret,
			debug : sails.config.redrumConfig.debug
		};

		var redrumSDK = new RedrumSDK(config);
		redrumSDK.getAccessToken(username, password, cb);

	},

	register : function(userData, cb) {

		var config = {
			clientId : sails.config.redrumConfig.clientId,
			clientSecret : sails.config.redrumConfig.clientSecret,
			debug : sails.config.redrumConfig.debug
		};

		var redrumSDK = new RedrumSDK(config);
		redrumSDK.register(userData, cb);
	}

};