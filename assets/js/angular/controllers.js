'use strict';

redrumApp.controller('MenuController', ['$location', '$scope', 'redrumAppServices', function($location, $scope, redrumAppServices) {
	$scope.atLocation = function(currentLocation) {
			console.log('Current Location: ', currentLocation);
			console.log('Location Url: ', $location.url());
			console.log('Location Hash: ', $location.hash());
			return false;
	};

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

	$scope.redeemCoupon = function(callUrl, callMethod, couponCode) {
		redrumAppServices.redeemCoupon(callUrl, callMethod, couponCode).then(
			function(data) {
				$window.location = '/market';
			});
	}
}]);

redrumApp.controller('AlertController', ['$scope', 'redrumAppServices', function($scope, redrumAppServices) {

	$scope.getAlerts = function() {
		redrumAppServices.alerts().then(
			function(data) {
				//console.log(data);
				$scope.alerts = data;
			});
	};

}]);

redrumApp.controller('UserController', ['$scope', '$location', '$window', 'redrumAppServices', function($scope, $location, $window, redrumAppServices) {
	
	$scope.signInWithFaceBook = function() {
		redrumAppServices.signInWithFaceBook().then(
			function(url) {
				$window.location = url;
			});
	};
	
	$scope.signInWithGitHub = function() {
		redrumAppServices.signInWithGitHub().then(
			function(url) {
				$window.location = url;
			});
	};

}]);