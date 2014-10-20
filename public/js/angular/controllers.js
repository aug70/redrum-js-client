'use strict';

function DashBoardController($scope, $http) {
	
	$scope.init = function() {
		$scope.message = 'Achtung';
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