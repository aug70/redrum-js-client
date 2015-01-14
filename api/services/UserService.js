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
		var result = {
			message : 'You signed in successfully.',
			nextStep : '/dashboard'
		};
		return result;
	}

};
