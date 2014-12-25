/**
 * ApiController
 *
 * @description :: Server-side logic for managing markets
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	dashboard : function(req, res) {

	    var result = {
			budget : { 
				box_header : '$ 58.000',
				box_text   : 'In your budget',
				box_label  : 'Check your shopping cart! ',
				box_link   : '/market'
			},
			stats : { 
				box_header : 'Check',
				box_text   : 'Your results',
				box_label  : 'See your achievements! ',
				box_link   : '/stats'
			},
			profile : { 
				box_header : 'Change',
				box_text   : 'Your profile information',
				box_label  : 'Edit your profile! ',
				box_link   : '/profile'
			},
			product : { 
				box_header : 'Browse',
				box_text   : 'Products available in the market',
				box_label  : 'Check out the Market! ',
				box_link   : '/market#products'
			},
			redeem : { 
				box_header : 'Redeem',
				box_text   : 'Codes and add to your credit',
				box_label  : 'Use coupons for game credit! ',
				box_link   : '/market#redeem'
			},
			buy : { 
				box_header : 'Buy',
				box_text   : 'Game credit',
				box_label  : 'Add money to your budget! ',
				box_link   : '/market#credit'
			},
			shop : { 
				box_header : 'Shop',
				box_text   : 'Add more products to your inventory',
				box_label  : 'Buy gear for your next case! ',
				box_link   : '/market#cart'
			},
			game : { 
				box_header : 'Solve',
				box_text   : 'A murder now',
				box_label  : 'You can do this! ',
				box_link   : '/game'
			}
		};
		res.json(result);
	},

	user : function(req, res) {

		RedrumApiService.invokeEndPoint('/account/summary', 'GET', function(result){

			var jsonObject = JSON.parse(result);
			var value = {
				avatar : '/img/avatar3.png',
				user_name : jsonObject.hasOwnProperty('username')? jsonObject.username : 'Unknown',
				full_name : jsonObject.hasOwnProperty('fullName')? jsonObject.fullName : 'Unknown',
				email : jsonObject.hasOwnProperty('email')? jsonObject.email : null,
				member_since : jsonObject.hasOwnProperty('dateCreated')? jsonObject.dateCreated : 'Unknown',
				status : 'Online',
				budget : jsonObject.hasOwnProperty('budget')? jsonObject.budget : 'Unknown',
				inventory_size : jsonObject.hasOwnProperty('inventorySize')? jsonObject.inventorySize : '',
				cart_items_size : jsonObject.hasOwnProperty('cartSize')? jsonObject.cartSize : '',
				orders_size : jsonObject.hasOwnProperty('ordersSize')? jsonObject.ordersSize : ''
			};
			res.json(value);
		});
		
	},

	cart : function(req, res) {

		RedrumApiService.invokeEndPoint('/market/cart', 'GET', function(result){
			res.json(JSON.parse(result));
		});

	},

	storeProducts : function(req, res) {

		RedrumApiService.invokeEndPoint('/products', 'GET', function(result){
			res.json(JSON.parse(result));
		});

	},

	inventory : function(req, res) {

		RedrumApiService.invokeEndPoint('/inventory', 'GET', function(result){
			res.json(JSON.parse(result));
		});

	}

};

