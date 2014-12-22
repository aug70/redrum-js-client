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
		}
	}
});