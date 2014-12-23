'use strict';


var service = angular.module('redrumAppServices', []);

service.factory('redrumAppServices', function() {

	console.log('Factory..........');
    return {
    	dashboard: function() {
    		console.log('Dashboard Service..........');
    		return {
				budget : { 
					box_header : '$143,000',
					box_text   : 'Your budget',
					box_link   : '/market'
				},
				stats : { 
					box_header : 'Measure',
					box_text   : 'See your stats',
					box_link   : '/stats'
				},
				profile : { 
					box_header : 'Profile',
					box_text   : 'Edit your profile',
					box_link   : '/profile'
				},
				product : { 
					box_header : 'Browse',
					box_text   : 'Unique products',
					box_link   : '/market#products'
				},
				redeem : { 
					box_header : 'Redeem',
					box_text   : 'Use coupons and add to your credit',
					box_link   : '/market#redeem'
				},
				buy : { 
					box_header : 'Buy',
					box_text   : 'Buy game credit',
					box_link   : '/market#credit'
				},
				shop : { 
					box_header : 'Shop',
					box_text   : 'Add more products to your inventory',
					box_link   : '/market#cart'
				},
				game : { 
					box_header : 'Solve',
					box_text   : 'Play a game and solve a murder',
					box_link   : '/game'
				}
			}
		},
		userData : function() {
			console.log('User data Service..........');
			return {
				user_avatar : '/img/avatar3.png',
				user_name : 'Jane',
				user_full_name : 'Jane Doe',
				user_member_since : 'Nov. 2012',
				user_status : 'Online',
				product_count : 56,
				cart_items_size : 4,
				user_orders_size : 12
			}
		},
		cart : function() {
			return {"cartItems":[{"productId":1,"name":"Short term office rental","price":"$3,000.00","quantity":1,"links":[{"rel":"remove","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/1/1","method":"DELETE","label":"Remove"},{"rel":"add","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/1/1","method":"PUT","label":"Add"},{"rel":"removeAll","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/1","method":"DELETE","label":"Remove All"}]},{"productId":121,"name":"Large lock picking kit","price":"$8,000.00","quantity":1,"links":[{"rel":"remove","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/121/1","method":"DELETE","label":"Remove"},{"rel":"add","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/121/1","method":"PUT","label":"Add"},{"rel":"removeAll","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/121","method":"DELETE","label":"Remove All"}]},{"productId":101,"name":"Small lock picking kit","price":"$12,000.00","quantity":4,"links":[{"rel":"remove","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/101/1","method":"DELETE","label":"Remove"},{"rel":"add","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/101/1","method":"PUT","label":"Add"},{"rel":"removeAll","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/101","method":"DELETE","label":"Remove All"}]},{"productId":91,"name":"Large finger print analysis kit","price":"$24,000.00","quantity":3,"links":[{"rel":"remove","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/91/1","method":"DELETE","label":"Remove"},{"rel":"add","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/91/1","method":"PUT","label":"Add"},{"rel":"removeAll","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/91","method":"DELETE","label":"Remove All"}]},{"productId":81,"name":"Medium finger print analysis kit","price":"$5,000.00","quantity":1,"links":[{"rel":"remove","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/81/1","method":"DELETE","label":"Remove"},{"rel":"add","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/81/1","method":"PUT","label":"Add"},{"rel":"removeAll","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/81","method":"DELETE","label":"Remove All"}]},{"productId":71,"name":"Small finger print analysis kit","price":"$3,000.00","quantity":1,"links":[{"rel":"remove","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/71/1","method":"DELETE","label":"Remove"},{"rel":"add","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/71/1","method":"PUT","label":"Add"},{"rel":"removeAll","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/71","method":"DELETE","label":"Remove All"}]},{"productId":131,"name":"Criminal record search permit","price":"$3,000.00","quantity":1,"links":[{"rel":"remove","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/131/1","method":"DELETE","label":"Remove"},{"rel":"add","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/131/1","method":"PUT","label":"Add"},{"rel":"removeAll","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/131","method":"DELETE","label":"Remove All"}]}],"cartTotal":"$58,000.00","message":null,"missingProducts":["Vehicle","Computer","LockPickingKit","CriminalRecordSearchPermit","MetalDetector","GunRegistrySearchPermit","BloodTypeSearchPermit"],"links":[{"rel":"self","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart","method":"GET","label":""},{"rel":"redeem","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/codes/","method":"POST","label":"Redeem Code"},{"rel":"emptyCart","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart","method":"DELETE","label":"Empty Cart"},{"rel":"purchase","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart","method":"POST","label":"Purchase"}]}
		},

		storeProducts : function() {
			return {"products":[{"name":"Short term office rental","description":"(valid for 30 games)","price":"$3,000.00","discountedPrice":"$3,000.00","onSale":false,"productId":1,"links":[{"rel":"addToCart","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/1/1","method":"GET","label":"Add to cart"},{"rel":"self","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/products/1","method":"GET","label":"Short term office rental"}]},{"name":"Mid term office rental","description":"(valid for 60 games)","price":"$5,000.00","discountedPrice":"$5,000.00","onSale":false,"productId":11,"links":[{"rel":"addToCart","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/11/1","method":"GET","label":"Add to cart"},{"rel":"self","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/products/11","method":"GET","label":"Mid term office rental"}]},{"name":"Long term office rental","description":"(valid for 90 games)","price":"$10,000.00","discountedPrice":"$10,000.00","onSale":false,"productId":21,"links":[{"rel":"addToCart","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/21/1","method":"GET","label":"Add to cart"},{"rel":"self","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/products/21","method":"GET","label":"Long term office rental"}]},{"name":"Short term automobile rental","description":"(valid for 30 games)","price":"$3,000.00","discountedPrice":"$3,000.00","onSale":false,"productId":31,"links":[{"rel":"addToCart","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/31/1","method":"GET","label":"Add to cart"},{"rel":"self","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/products/31","method":"GET","label":"Short term automobile rental"}]},{"name":"Mid term automobile rental","description":"(valid for 60 games)","price":"$5,000.00","discountedPrice":"$5,000.00","onSale":false,"productId":41,"links":[{"rel":"addToCart","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/41/1","method":"GET","label":"Add to cart"},{"rel":"self","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/products/41","method":"GET","label":"Mid term automobile rental"}]},{"name":"Long term automobile rental","description":"(valid for 90 games)","price":"$8,000.00","discountedPrice":"$8,000.00","onSale":false,"productId":51,"links":[{"rel":"addToCart","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/51/1","method":"GET","label":"Add to cart"},{"rel":"self","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/products/51","method":"GET","label":"Long term automobile rental"}]},{"name":"Computer","description":"(valid always, requires Office)","price":"$3,000.00","discountedPrice":"$3,000.00","onSale":false,"productId":61,"links":[{"rel":"addToCart","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/61/1","method":"GET","label":"Add to cart"},{"rel":"self","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/products/61","method":"GET","label":"Computer"}]},{"name":"Small finger print analysis kit","description":"(valid for 20 games, requires Office)","price":"$3,000.00","discountedPrice":"$3,000.00","onSale":false,"productId":71,"links":[{"rel":"addToCart","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/71/1","method":"GET","label":"Add to cart"},{"rel":"self","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/products/71","method":"GET","label":"Small finger print analysis kit"}]},{"name":"Medium finger print analysis kit","description":"(valid for 40 games, requires Office)","price":"$5,000.00","discountedPrice":"$5,000.00","onSale":false,"productId":81,"links":[{"rel":"addToCart","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/81/1","method":"GET","label":"Add to cart"},{"rel":"self","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/products/81","method":"GET","label":"Medium finger print analysis kit"}]},{"name":"Large finger print analysis kit","description":"(valid for 60 games, requires Office)","price":"$8,000.00","discountedPrice":"$8,000.00","onSale":false,"productId":91,"links":[{"rel":"addToCart","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/91/1","method":"GET","label":"Add to cart"},{"rel":"self","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/products/91","method":"GET","label":"Large finger print analysis kit"}]},{"name":"Small lock picking kit","description":"(valid for 20 games, requires Office)","price":"$3,000.00","discountedPrice":"$3,000.00","onSale":false,"productId":101,"links":[{"rel":"addToCart","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/101/1","method":"GET","label":"Add to cart"},{"rel":"self","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/products/101","method":"GET","label":"Small lock picking kit"}]},{"name":"Medium lock picking kit","description":"(valid for 40 games, requires Office)","price":"$5,000.00","discountedPrice":"$5,000.00","onSale":false,"productId":111,"links":[{"rel":"addToCart","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/111/1","method":"GET","label":"Add to cart"},{"rel":"self","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/products/111","method":"GET","label":"Medium lock picking kit"}]},{"name":"Large lock picking kit","description":"(valid for 60 games, requires Office)","price":"$8,000.00","discountedPrice":"$8,000.00","onSale":false,"productId":121,"links":[{"rel":"addToCart","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/121/1","method":"GET","label":"Add to cart"},{"rel":"self","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/products/121","method":"GET","label":"Large lock picking kit"}]},{"name":"Criminal record search permit","description":"(valid for 20 games, requires Computer)","price":"$3,000.00","discountedPrice":"$3,000.00","onSale":false,"productId":131,"links":[{"rel":"addToCart","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/131/1","method":"GET","label":"Add to cart"},{"rel":"self","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/products/131","method":"GET","label":"Criminal record search permit"}]},{"name":"Metal detector","description":"(valid for 10 games)","price":"$12,000.00","discountedPrice":"$12,000.00","onSale":false,"productId":141,"links":[{"rel":"addToCart","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/141/1","method":"GET","label":"Add to cart"},{"rel":"self","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/products/141","method":"GET","label":"Metal detector"}]},{"name":"Gun registry search permit","description":"(valid for 10 games, requires Computer)","price":"$15,000.00","discountedPrice":"$15,000.00","onSale":false,"productId":151,"links":[{"rel":"addToCart","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/151/1","method":"GET","label":"Add to cart"},{"rel":"self","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/products/151","method":"GET","label":"Gun registry search permit"}]},{"name":"Blood type search permit","description":"(valid for 10 games, requires Computer)","price":"$30,000.00","discountedPrice":"$30,000.00","onSale":false,"productId":161,"links":[{"rel":"addToCart","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/market/cart/161/1","method":"GET","label":"Add to cart"},{"rel":"self","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/products/161","method":"GET","label":"Blood type search permit"}]}]}
		},

		inventory : function() {
			return {"budget":"$4,985,000.00","inventoryItems":[{"name":"Office","validity":"valid for 120 games"},{"name":"Finger print analysis kit","validity":"valid for 40 games"}],"links":[{"rel":"self","href":"https://apiserver1-redrumapi.rhcloud.com:443/redrum/api/beta/inventory","method":"GET","label":""}]}
		}
	}
});