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

		var result = {
			avatar : '/img/avatar3.png',
			name : 'Jane',
			full_name : 'Jane Doe',
			member_since : 'Nov. 2012',
			status : 'Online',
			budget : '$58.000,00',
			inventory_size : 56,
			cart_items_size : 4,
			orders_size : 12
		};
		res.json(result);
	},

	cart : function(req, res) {

		RedrumApiService.invokeEndPoint('/market/cart', 'GET', function(result){
			res.json(result);
		});
		
	},

	storeProducts : function(req, res) {

		RedrumApiService.invokeEndPoint('/products', 'GET', function(result){
			res.json(result);
		});

	},

	inventory : function(req, res) {

		RedrumApiService.invokeEndPoint('/inventory', 'GET', function(result){
			res.json(result);
		});

	}

};

