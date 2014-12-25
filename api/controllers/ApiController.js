/**
 * ApiController
 *
 * @description :: Server-side logic for managing markets
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	dashboard : function(req, res) {

		if(CacheService.hasKey('user_dashboard')) {
			res.json(CacheService.get('user_dashboard'));
			return;
		}
		var money = '$58.000';
	    var result = {
			budget : { 
				box_header : money,
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
		CacheService.add('user_dashboard', result);
		res.json(result);
	},

	user : function(req, res) {

		if(CacheService.hasKey('user_result')) {
			res.json(CacheService.get('user_result'));
			return;
		}

		RedrumApiService.invokeEndPoint('/account/summary', 'GET', function(result){

			var jsonObject = JSON.parse(result);
			var value = {
				avatar : '/img/avatar3.png',
				userName : jsonObject.hasOwnProperty('username')? jsonObject.username : 'Unknown',
				fullName : jsonObject.hasOwnProperty('fullName')? jsonObject.fullName : 'Unknown',
				email : jsonObject.hasOwnProperty('email')? jsonObject.email : null,
				memberSince : jsonObject.hasOwnProperty('dateCreated')? jsonObject.dateCreated : 'Unknown',
				status : 'Online',
				budget : jsonObject.hasOwnProperty('budget')? jsonObject.budget : 'Unknown',
				inventorySize : jsonObject.hasOwnProperty('inventorySize')? jsonObject.inventorySize : '',
				cartSize : jsonObject.hasOwnProperty('cartSize')? jsonObject.cartSize : '',
				ordersSize : jsonObject.hasOwnProperty('ordersSize')? jsonObject.ordersSize : ''
			};
			CacheService.add('user_result', value);
			res.json(value);
		});
		
	},

	cart : function(req, res) {

		if(CacheService.hasKey('user_cart')) {
			res.json(CacheService.get('user_cart'));
			return;
		}

		RedrumApiService.invokeEndPoint('/market/cart', 'GET', function(result){
			var resultJSON = JSON.parse(result);
			CacheService.add('user_cart', resultJSON);
			res.json(resultJSON);
		});

	},

	storeProducts : function(req, res) {

		if(CacheService.hasKey('products')) {
			res.json(CacheService.get('products'));
			return;
		}

		RedrumApiService.invokeEndPoint('/products', 'GET', function(result){
			var resultJSON = JSON.parse(result);
			CacheService.add('products', resultJSON);
			res.json(resultJSON);
		});

	},

	inventory : function(req, res) {

		if(CacheService.hasKey('user_inventory')) {
			res.json(CacheService.get('user_inventory'));
			return;
		}

		RedrumApiService.invokeEndPoint('/inventory', 'GET', function(result){
			var resultJSON = JSON.parse(result);
			CacheService.add('user_inventory', resultJSON);
			res.json(resultJSON);
		});

	}

};

