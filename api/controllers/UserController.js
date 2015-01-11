/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */


module.exports = {


	signOut : function(req, res) {
		return res.redirect("/signin");
	},

	facebook: function(req, res) {
		
		var Facebook = require('machinepack-facebook');
    	Facebook.getLoginUrl({
    	 
    	 appId : sails.config.facebookConfig.apiKey,
    	 callbackUrl : sails.config.facebookConfig.callbackUrl,
    	 permissions : ['email']

    	}).exec({
    		success: function(loginUrl){
    			res.send(loginUrl);
    			//res.send('<a href="'+loginUrl+'">Login with Facebook</a>');
    		}
    	});
	},

	facebookcb : function(req, res) {
	    
	    var Facebook = require('machinepack-facebook');
	    Facebook.getAccessToken({
	      appId : sails.config.facebookConfig.apiKey,
	      callbackUrl : sails.config.facebookConfig.callbackUrl,
	      appSecret: sails.config.facebookConfig.secretKey,
	      code: req.param('code')
	    }).exec({
	    
	      // Triggered when the Facebook API returns an error (i.e. a non-2xx status code)
	      error: function (error){
	        res.json(error);

	      },
	    
	      // Returns the access token itself, as well as the timestamp when it expires (as a ISO/JSON date)
	      success: function (result){
	        //res.send('Got:\n', result);

		    // Get information about the Facebook user with the specified access token.
		    Facebook.getUserByAccessToken({
		      accessToken: result.token,
		    }).exec({
		    
		      // Triggered when the Facebook API returns an error (i.e. a non-2xx status code)
		      error: function (error){
	        	res.json(error);
		      },
		    
		      // Returns all available data for the Facebook user connected to the specified access token.
		      // Advanced details about each of the keys below are available at
		      // https://developers.facebook.com/docs/graph-api/reference/v2.2/user.
		      success: function (result){
		        res.send(result);
		      },
		    });


	      },
	    });
		
	}
};

