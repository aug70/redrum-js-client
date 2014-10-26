'use strict';

function DashBoardController($scope, $resource) {
	
	$scope.dashboard = {
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
}

function MenuController($scope, $resource) {
	
	$scope.userData = {
		user_avatar : '/img/avatar3.png',
		user_name : 'Jane',
		user_full_name : 'Jane Doe',
		user_member_since : 'Nov. 2012',
		user_status : 'Online',
		product_count : 56,
		cart_items_size : 4,
		user_orders_size : 12
	}

}

function MarketController($scope, $resource) {
	
}

function ProfileController($scope, $resource) {
	
}

function StatsController($scope, $resource) {

}	