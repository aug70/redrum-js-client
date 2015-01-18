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

redrumApp.controller('MarketController', ['$window', '$scope', 'redrumAppServices', '$filter', 'ngTableParams', function($window, $scope, redrumAppServices, $filter, ngTableParams) {

	$scope.tableParams = new ngTableParams(
	{
		page: 1,		// show first page
		count: 10,		// count per page
		filter: {
			name: ''    // initial filter
		},
		sorting: {
			name: 'asc'	// initial sorting
		}
	}, 
	{
		getData : function($defer, params) {
			redrumAppServices.products().then(

				function(data) {
				// use build-in angular filter
				var filteredData = params.filter() ?
					$filter('filter')(data.products, params.filter()) :
						data;
		        
				var orderedData = params.sorting() ?
					$filter('orderBy')(filteredData, params.orderBy()) :
						data;

				params.total(orderedData.length); // set total for recalc pagination
				//params.groupBy('productType');
				$defer.resolve(
					orderedData.slice(
						(params.page() - 1) * params.count(), 
						params.page() * params.count()
					)
				);					
			});
	    }
	});
	
	

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

	$scope.getOrders = function() {
		redrumAppServices.orders().then(
			function(data) {
				$scope.orders = data;
			});
	};

	$scope.processCart = function(callUrl, callMethod) {

		redrumAppServices.processCart(callUrl, callMethod).then(
			function(data) {
				$scope.cart = data;
				$window.location = '/market';
			});
	};
}]);

redrumApp.controller('AlertController', ['$scope', 'redrumAppServices', function($scope, redrumAppServices) {

	$scope.getAlerts = function() {
		redrumAppServices.alerts().then(
			function(data) {
				console.log(data);
				$scope.alerts = data;
			});
	};

}]);

redrumApp.controller('StatsController', ['$scope', 'redrumAppServices', function($scope, redrumAppServices) {

	redrumAppServices.stats().then(
			function(data) {
				$scope.stats = data;
			});

	$scope.filterFunction = function(element) {
  		return element.label.match(/^Played/) ? false : true;
	};

}]);

redrumApp.controller('UserController', ['$scope', '$location', '$window', 'redrumAppServices', function($scope, $location, $window, redrumAppServices) {
	$scope.getFaceBookSignInUrl = function() {
		redrumAppServices.faceBookSignInUrl().then(
			function(data) {
				$scope.faceBookSignInUrl = data;
			});
	};

	$scope.facebookLogin = function(url) {
		$window.location = url;
	}
}]);
