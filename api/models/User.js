/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	schema: true,

	attributes: {

		user_name: {
			type : 'string',
			required : true,
			unique : true
		},
		first_name : {
			type : 'string',
			required : true
		},
		last_name : {
			type: 'string',
			required : true
		},
		gender : {
			type : 'string',
			required : true
		},
		email : {
			type : 'string',
			email : true,
			required : true,
			unique : true
		}
  }
};

