/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	connection : 'mongodb',
	schema : true,
	tableName : 'User',
	autoCreatedAt : true,
	autoUpdatedAt : true,

	attributes: {
		id: {
			type: 'string',
			primaryKey: true,
			unique: true
		},
		userName: {
			type : 'string',
			required : true,
			unique : true
		},
		firstName : {
			type : 'string',
			required : true
		},
		lastName : {
			type: 'string',
			required : true
		},
		password : {
			type : 'string',
			required : true
		},
		email : {
			type : 'string',
			email : true,
			required : true,
			unique : true
		},
		originUserId : {
			type : 'string',
			required : true
		}
  },

  // Lifecycle Callbacks
  // beforeCreate: function (values, cb) {

  //   // Encrypt password
  //   bcrypt.hash(values.password, 10, function(err, hash) {
  //     if(err) return cb(err);
  //     values.password = hash;
  //     //calling cb() with an argument returns an error. Useful for canceling the entire operation if some criteria fails.
  //     cb();
  //   });
  // }
};