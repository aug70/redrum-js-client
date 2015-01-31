/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */


module.exports = {


	signOut : function(req, res) {
		if(req.session) {
			CacheService.remove(CacheService.makeKey(req, 'user_summary'));
			CacheService.remove(CacheService.makeKey(req, 'user_dashboard'));
			CacheService.remove(CacheService.makeKey(req, 'user_orders'));
			CacheService.remove(CacheService.makeKey(req, 'user_inventory'));
		}
		var result = UserService.signOut();
		req.session.destroy();

		AlertService.addAlert(req, result.message);
		return res.redirect(result.nextStep);
	},

	signInWithFaceBook : function(req, res) {
		
		var Facebook = require('machinepack-facebook');
		Facebook.getLoginUrl({
		 
		 appId : sails.config.facebookConfig.apiKey,
		 callbackUrl : sails.config.facebookConfig.callbackUrl,
		 permissions : ['email']

		}).exec({
			success: function(loginUrl){
				res.send(loginUrl);
			}
		});
	},

	signInWithGitHub : function(req, res) {
		
		var Github = require('machinepack-github');
		Github.getLoginUrl({
		 
		 clientId : sails.config.githubConfig.apiKey,
		 callbackUrl : sails.config.githubConfig.callbackUrl,
		 scope : [ 'public_repo' ]

		}).exec({
			success: function(loginUrl){
				res.send(loginUrl);
			}
		});
	},

	githubcb : function(req, res) {
		var Github = require('machinepack-github');
		
	    Github.getAccessToken({
	      clientId : sails.config.githubConfig.apiKey,
	      callbackUrl : sails.config.githubConfig.callbackUrl,
	      clientSecret : sails.config.githubConfig.secretKey,
	      code : req.param('code')
	    }).exec({

			error: function (error){

				var result = UserService.handleSignInError(error);
				AlertService.addAlert(req, result.message);
				res.redirect(result.nextStep);
			},

	    	success: function(result) {
	    		console.log('Result: '+ result);
	    		res.send(result.token);
	    	},
	    });

	},
	facebookcb : function(req, res) {
	    
	    var Facebook = require('machinepack-facebook');
	    Facebook.getAccessToken({
	      appId : sails.config.facebookConfig.apiKey,
	      callbackUrl : sails.config.facebookConfig.callbackUrl,
	      appSecret : sails.config.facebookConfig.secretKey,
	      code : req.param('code')
	    }).exec({
	    
	      // Triggered when the Facebook API returns an error (i.e. a non-2xx status code)
			error: function (error){

				var result = UserService.handleSignInError(error);
				AlertService.addAlert(req, result.message);
				res.redirect(result.nextStep);
			},
	    
			// Returns the access token itself, as well as the timestamp when it expires (as a ISO/JSON date)
			success: function (result){

				// Get information about the Facebook user with the specified access token.
				Facebook.getUserByAccessToken({
					accessToken: result.token,
				}).exec({

					// Triggered when the Facebook API returns an error (i.e. a non-2xx status code)
					error: function (error){
						var result = UserService.handleSignInError(error);
						AlertService.addAlert(req, result.message);
						res.redirect(result.nextStep);
					},

					// Returns all available data for the Facebook user connected to the specified access token.
					// Advanced details about each of the keys below are available at
					// https://developers.facebook.com/docs/graph-api/reference/v2.2/user.
					success: function (data){

						UserService.signInOrRegister(data, function(result){
							req.session.authenticated = true;
							req.session.username = result.username;
							req.session.password = result.password;

							AlertService.addAlert(req, result.message);
							res.redirect(result.nextStep);
						});
					}, // end of success
				}); // end of getUserByAccessToken
			}, // end of success
	    }); //end of getAccessToken
	}
};