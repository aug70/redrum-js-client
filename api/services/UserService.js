var uuid = require('node-uuid');

var registerEmail = function(data, cb) {
	if(!data.email) {

		var result = {
			message : 'Your facebook account email can not accessed.',
			nextStep : '/signin'
		};
		cb(result);
	}

	// Search for user with email
	User.findOne({ email: data.email }).exec(

		function findCB(err, foundUser){
			
			// If error return error result.
			if(err) {
				console.error('Error: ', err);
				var result = {
					message : 'There was an error searching for existing user.',
					nextStep : '/signin'
				};
				cb(result);
			}

			// If found, this user exists
			if(foundUser) {
				//console.log('username: ', foundUser.userName);
				//console.log('password: ', foundUser.password);
				var result = {
					message : 'You signed in successfully.',
					nextStep : '/dashboard',
					username : foundUser.userName,
					password : foundUser.password
				};
				cb(result);
			}

			// This is a new user.
			else {
				
				var userData = convert(data);

				// Create the new user in system.
				User.create(userData, function userCreated(err, user) {
					console.log('Trying to create user now.');					
					if(err) {

						console.error('Error: ' + err);
						// User creation has a problem
						var result = {
							message : 'There was an error creating user.',
							nextStep : '/signin'
						};
						cb(result);
					}

					// User created successfully, now register with redrum.
					if(user) {
						//console.log('User created successfully.');
						RedrumApiService.register(userData, function(success) {
							if(!success) {
								var result = {
								message : 'There was an error registering your account.',
								nextStep : '/signin'
								};
								cb(result);
							}
							
							console.info('User registered successfully.');
							var result = {
								message : 'You registered and signed in successfully.',
								nextStep : '/dashboard',
								username : user.userName,
								password : user.password
							};
							
							cb(result);

						});// end RedrumApiService.register

					} // end if(user)

				});// end User.create

			} // end else

		}); //end findCB

};

// Convert facebook user data to register user data.
var convert = function(userData) {
	var password = uuid.v1().replace(/-/g, '').substring(0,10);
	var convertedData = {
		'userName' : userData.name,
		'firstName' : userData.first_name,
		'lastName' : userData.last_name,
		'email' : userData.email,
		'password' : password,
		'providerClientId' : sails.config.redrumConfig.clientId,
		'origin' : 'facebook',
		'originUserId' : userData.id
	};
	return convertedData;
};



module.exports = {

	handleSignInError : function(error) {
		console.error('Error: ', error);
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

	signInOrRegister : function(data, result) {

		registerEmail(data, result);
		
	},


};


