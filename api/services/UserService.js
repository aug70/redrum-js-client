var uuid = require('node-uuid');
var registerEmail = function(data) {
	if(!data.email) {
		var result = {
			message : 'There was a problem using your facebook account.',
			nextStep : '/signin'
		};
		return result;
	}
	var userData = convert(data);
	//isUserRegistered(data, loginUser, registerUser);

	var result = {
		message : 'You signed in successfully.',
		nextStep : '/dashboard'
	};
	return result;
};

var convert = function(userData) {
	var password = uuid.v1().replace(/-/g, '').substring(0,10);
	var convertedData = {
		'userName' : userData.first_name + ' ' + userData.last_name,
		'firstName' : userData.first_name,
		'lastName' : userData.last_name,
		'email' : userData.email,
		'password' : password,
		'providerClientId' : 'redrum-js-demo',
		'origin' : 'facebook',
		'originUserId' : userData.id
	};
	return convertedData;
};



module.exports = {

	handleSignInError : function(error) {
		console.log(error);
		var result = {
			message : 'There was a problem while processing your request.',
			nextStep : '/signin'
		};
		return result;
	},

	signOut : function() {
		var result = {
			message : 'You signed out successfully.',
			nextStep : '/signin'
		};
		return result;
	},

	signInOrRegister : function(data) {

		console.log(data);
		return registerEmail(data);

		// if(!emailCaptured(data)) {
		// 	var result = {
		// 		message : 'There was a problem using your facebook account.',
		// 		nextStep : '/signin'
		// 	};
		// 	return result;
		// }
		// var result = {};
		
		// if(!emailRegistered(data)) {
		// 	register(data);
		// }

		
		
		
	},


};


