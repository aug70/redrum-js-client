/**
 * ApiController
 *
 * @description :: Server-side api
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	dashboard : function(req, res) {

		var cacheKey = CacheService.makeKey(req, 'user_dashboard');
		if(CacheService.hasKey(cacheKey)) {
			res.json(CacheService.get(cacheKey));
			return;
		}


		var budgetBoxHeader = 'Money';
		var budgetBoxLabel = 'See your shopping cart! ';
		var userSummaryCacheKey = CacheService.makeKey(req, 'user_summary');
		if(CacheService.hasKey(userSummaryCacheKey)) {
			var userSummaryCacheValue = CacheService.get(userSummaryCacheKey);
			budgetBoxHeader = userSummaryCacheValue.budget;
			budgetBoxLabel =  userSummaryCacheValue.cartSize + ' items in your shopping cart';
		}

	    var result = {
			budget : { 
				box_header : budgetBoxHeader,
				box_text   : 'In your budget',
				box_label  : budgetBoxLabel,
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
			},
			recommended : {
				box_header : 'Know',
				box_text   : 'What\'s recommended for you?',
				box_label  : 'See your recommendations! ',
				box_link   : '/market#recommended'
			}
		};
		if(budgetBoxHeader!=='Money') {
			CacheService.add(cacheKey, result);
		}
		res.json(result);
	},

	user : function(req, res) {

		var cacheKey = CacheService.makeKey(req, 'user_summary');
		if(CacheService.hasKey(cacheKey)) {
			res.json(CacheService.get(cacheKey));
			return;
		}

		RedrumApiService.invokeEndPoint(req, '/account/summary', 'GET', function(result){

			console.log('Result: '+ result);
			
			var jsonObject = JSON.parse(result);
			var value = {
				
				userName : jsonObject.hasOwnProperty('username')? jsonObject.username : 'Unknown',
				fullName : jsonObject.hasOwnProperty('fullName')? jsonObject.fullName : 'Unknown',
				email : jsonObject.hasOwnProperty('email')? jsonObject.email : null,
				memberSince : jsonObject.hasOwnProperty('dateCreated')? jsonObject.dateCreated : 'Unknown',
				status : 'Online',
				budget : jsonObject.hasOwnProperty('budget')? jsonObject.budget : 'Unknown',
				inventorySize : jsonObject.hasOwnProperty('inventorySize')? jsonObject.inventorySize : '',
				cartSize : jsonObject.hasOwnProperty('cartSize')? jsonObject.cartSize : '',
				ordersSize : jsonObject.hasOwnProperty('ordersSize')? jsonObject.ordersSize : '',
				statistics : jsonObject.hasOwnProperty('statistics')? jsonObject.statistics : null,
				avatar : '/img/avatar3.png',
				activeGame : jsonObject.hasOwnProperty('activeGame')? jsonObject.activeGame : null,
				missingProducts : jsonObject.hasOwnProperty('missingProducts')  
					? jsonObject.missingProducts : null
			};
			if(value.email!=null) {
				GravatarService.getGravatarUrl(value.email, function(gravatarUrl) {
					if(gravatarUrl!=null||gravatarUrl!=undefined) {
						//console.log('Gravatar Url: ', gravatarUrl);
						value.avatar = gravatarUrl;
					}	
				});
			}

			

			CacheService.add(cacheKey, value);
			res.json(value);
		});
		
	},

	cart : function(req, res) {

		var cacheKey = CacheService.makeKey(req, 'user_cart');
		if(CacheService.hasKey(cacheKey)) {
			res.json(CacheService.get(cacheKey));
			return;
		}

		RedrumApiService.invokeEndPoint(req, '/market/cart', 'GET', function(result){
			//console.log(result);
			var resultJSON = JSON.parse(result);
			CacheService.add(cacheKey, resultJSON);
			res.json(resultJSON);
		});

	},

	products : function(req, res) {

		var cacheKey = 'products';
		if(CacheService.hasKey(cacheKey)) {
			res.json(CacheService.get(cacheKey));
			return;
		}

		RedrumApiService.invokeEndPoint(req, '/products', 'GET', function(result){
			var resultJSON = JSON.parse(result);
			CacheService.add(cacheKey, resultJSON);
			res.json(resultJSON);
		});

	},

	inventory : function(req, res) {

		var cacheKey = CacheService.makeKey(req, 'user_inventory');
		if(CacheService.hasKey(cacheKey)) {
			res.json(CacheService.get(cacheKey));
			return;
		}

		RedrumApiService.invokeEndPoint(req, '/inventory', 'GET', function(result){
			var resultJSON = JSON.parse(result);
			CacheService.add(cacheKey, resultJSON);
			res.json(resultJSON);
		});

	},

	stats : function(req,res) {
		
		var cacheKey = CacheService.makeKey(req, 'user_stats');
		if(CacheService.hasKey(cacheKey)) {
			res.json(CacheService.get(cacheKey));
			return;
		}

		var userSummaryCacheValue = CacheService.get(CacheService.makeKey(req, 'user_summary'));


		var result = { 
			showOverall : userSummaryCacheValue.statistics.gamesPlayed>0,
			detail : 
			[{
				order: 0,
				label : 'Played',
				value: userSummaryCacheValue.statistics.gamesPlayed,
				type: 'primary',
				percentClass: 'badge bg-blue',
				percent: userSummaryCacheValue.statistics.gamesPlayedPercentage + '%'
			},
			{
				order: 1,
				label : 'Won',
				value: userSummaryCacheValue.statistics.gamesWon,
				type: 'success',
				percentClass: 'badge bg-green',
				percent: userSummaryCacheValue.statistics.gamesWonPercentage + '%'
			},
			{
				order: 2,
				label : 'Abandoned',
				value: userSummaryCacheValue.statistics.gamesAbandoned,
				type: 'warning',
				percentClass: 'badge bg-yellow',
				percent: userSummaryCacheValue.statistics.gamesAbandonedPercentage + '%'
			},
			{
				order: 3,
				label : 'Lost',
				value: userSummaryCacheValue.statistics.gamesLost,
				type: 'danger',
				percentClass: 'badge bg-red',
				percent: userSummaryCacheValue.statistics.gamesLostPercentage + '%'
			}]
		};
		
		CacheService.add(cacheKey, result);
		res.json(result);
	},

	orders : function(req, res) {

		var cacheKey = CacheService.makeKey(req, 'user_orders');
		if(CacheService.hasKey(cacheKey)) {
			res.json(CacheService.get(cacheKey));
			return;
		}

		RedrumApiService.invokeEndPoint(req, '/market/orders', 'GET', function(result){
			var resultJSON = JSON.parse(result);
			CacheService.add(cacheKey, resultJSON);
			res.json(resultJSON);
		});
	},

	processCart : function(req, res) {
		var callUrl = req.body.callUrl;
		var callMethod = req.body.callMethod;
		//console.log('Req call url: ', callUrl);
		//console.log('Req call method: ', callMethod);
		var cacheKey = CacheService.makeKey(req, 'user_cart');
		//console.log('Cache key ', cacheKey, ' is removed.');
		CacheService.remove(cacheKey);
		CacheService.invalidateUserCaches(req);

		RedrumApiService.invokeEndPoint(req, callUrl, callMethod, function(result){
			var resultJSON = JSON.parse(result);
			CacheService.add(cacheKey, resultJSON);
			if(resultJSON.hasOwnProperty('message')) {
				AlertService.addAlert(req, resultJSON.message);
			}
			res.send(resultJSON);
		});
	},

	redeemCoupon : function(req, res) {
		
		var callUrl = req.body.callUrl + req.body.couponCode;
		var callMethod = req.body.callMethod;
		console.log('Req call url: ', callUrl);
		console.log('Req call method: ', callMethod);

		CacheService.invalidateUserCaches(req);

		RedrumApiService.invokeEndPoint(req, callUrl, callMethod, function(result){
			console.log('Result: ', result);
			var resultJSON = JSON.parse(result);
			if(resultJSON.hasOwnProperty('message')) {
				AlertService.addAlert(req, resultJSON.message);
			}
			res.send(resultJSON);
		});
	},

	gameLevels : function(req, res) {

		var cacheKey = 'game_levels';
		if(CacheService.hasKey(cacheKey)) {
			return res.json(CacheService.get(cacheKey));
		}

		RedrumApiService.invokeEndPoint(req, '/games/levels', 'GET', function(result){
			var resultJSON = JSON.parse(result);
			CacheService.add(cacheKey, resultJSON);
			res.json(resultJSON);
		});
	},

	game : function(req, res) {

		var callData = req.body.callData;
		var bustCache = req.body.bustCache;
		// console.log('Req call data: ', callData);
		console.log('Req bust cache: ', bustCache);
		var callUrl = callData.href;
		// console.log('Req call url: ', callData.href);
		var callMethod = callData.method;
		// console.log('Req call method: ', callData.method);

		if(bustCache) {
			CacheService.invalidateUserCaches(req);
		}
		
		RedrumApiService.invokeEndPoint(req, callUrl, callMethod, function(result){
			console.log('Result: ', result);
			var resultJSON = JSON.parse(result);
			if(resultJSON.hasOwnProperty('message')) {
				AlertService.addAlert(req, resultJSON.message);
			}
			res.send(resultJSON);
		});
	}


};

