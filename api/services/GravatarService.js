// Build the URL of a gravatar image for a particular email address.
var Gravatar = require('machinepack-gravatar');

module.exports = {

	getGravatarUrl : function(email, cb) {
		var gravatarUrl = Gravatar.getImageUrl({
			emailAddress: email,
			gravatarSize: 215,
			rating: 'g',
			useHttps: true,
		}).execSync();
		return cb(gravatarUrl);
	}


};



