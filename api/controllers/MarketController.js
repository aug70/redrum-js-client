/**
 * MarketController
 *
 * @description :: Server-side logic for managing markets
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {


	home: function(req, res) {
		var RedrumSDK = require('redrum-js-sdk');
		var config = {
			clientId : sails.config.redrumConfig.clientId,
			clientSecret : sails.config.redrumConfig.clientSecret,
			debug : sails.config.redrumConfig.debug
		};

		var redrumSDK = new RedrumSDK(config);
		// redrumSDK.siteOffline(function (offline) {
		// 	console.log(offline);
		// 	res.json(offline);
		// });
		redrumSDK.getAccessToken('tester', '121212', function cb(token) {
			console.log(token);
			res.json(token);
		});

	}
};

