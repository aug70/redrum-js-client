'use strict';

function DashBoardController($scope, $http) {
	
	$scope.init = function() {
		$scope.budget = { 
			box_header : '$143,000',
			box_text : 'Your budget',
			box_link : '/market'
		};
		$scope.stats = { 
			box_header : '%56 success',
			box_text : 'See your stats',
			box_link : '/stats'
		};
		$scope.profile = { 
			box_header : 'Profile',
			box_text : 'Edit your profile',
			box_link : '/profile'
		};
		$scope.product = { 
			box_header : '56',
			box_text : 'Unique products',
			box_link : '/market#products'
		};
		$scope.redeem = { 
			box_header : 'Redeem',
			box_text : 'Use coupons and add to your credit',
			box_link : '/market#redeem'
		};
		$scope.buy = { 
			box_header : 'Buy',
			box_text : 'Buy game credit',
			box_link : '/market#credit'
		};
		$scope.shop = { 
			box_header : 'Shop',
			box_text : 'Add more products to your inventory',
			box_link : '/market#cart'
		};
		$scope.game = { 
			box_header : 'Solve',
			box_text : 'Play a game and solve a murder',
			box_link : '/game'
		};





		
	}
}

function LeftMenuController($scope, $http) {
	
	$scope.init = function() {
		$scope.user_avatar = '/img/avatar3.png';
		$scope.user_name = 'Jane';
		$scope.user_status = 'Online';
		$scope.product_count = 56;
		$scope.cart_items_size = 4;
		$scope.user_orders_size = 12;
	}
}

function UserMenuController($scope, $http) {
	
	$scope.init = function() {
		$scope.user_full_name = 'Jane Doe';
		$scope.user_member_since = 'Nov. 2012';
	}
}