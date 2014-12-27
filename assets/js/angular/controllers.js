'use strict';

redrumApp.controller('MenuController', ['$scope', 'redrumAppServices', function($scope, redrumAppServices) {
	redrumAppServices.user().then(
		function(data) {
			$scope.user = data;
		});
}]);


redrumApp.controller('DashBoardController', ['$scope', 'redrumAppServices', function($scope, redrumAppServices) {
	redrumAppServices.dashboard().then(
		function(data) {
			$scope.dashboard = data;
		});
}]);

redrumApp.controller('MarketController', ['$scope', 'redrumAppServices', function($scope, redrumAppServices) {
	
	$scope.getProducts = function() {
		redrumAppServices.storeProducts().then(
			function(data) {
				$scope.products = data.products;
			});
	};

	$scope.getCart = function() {
		redrumAppServices.cart().then(
			function(data) {
				$scope.cart = data;
			});
	};
	
	$scope.getInventory = function() {
		redrumAppServices.inventory().then(
			function(data) {
				$scope.inventory = data;
			});
	};


}]);

redrumApp.controller('ProfileController', ['$scope', 'redrumAppServices', function($scope, redrumAppServices) {
}]);

redrumApp.controller('StatsController', ['$scope', 'redrumAppServices', function($scope, redrumAppServices) {
}]);