'use strict';

redrumApp.controller('MenuController', ['$window', '$scope', 'redrumAppServices', function($window, $scope, redrumAppServices) {

	redrumAppServices.user().then(
		function(data) {
			$scope.user = data;
			// $scope.game = getGame(data);
		});

}]);

redrumApp.controller('DashBoardController', ['$scope', 'redrumAppServices', function($scope, redrumAppServices) {
	redrumAppServices.dashboard().then(
		function(data) {
			$scope.dashboard = data;
		});
}]);

redrumApp.controller('GameController', ['$scope', 'redrumAppServices', function($scope, redrumAppServices) {

	$scope.debugCollapsed = true;

	$scope.action = function(callData) {
		redrumAppServices.postAction(callData).then(
			function(response) {
				$scope.game = response.data;
			});
		};

	$scope.closeModal = function () {
		//$uibModalInstance.close();
	};

	$scope.owns = function (item) {
		return $scope.game.inventory.indexOf(item)>=0;
	};

	$scope.ownsOffice = function () {
		return $scope.owns('Office')>0;
	};

	$scope.ownsComputer = function () {
		return $scope.owns('Computer')>0;
	};

	$scope.criminalRecordUnknown = function(suspect) {
		return suspect.criminalRecord=='Unknown.';
	};

	$scope.bloodTypeUnknown = function(suspect) {
		return suspect.bloodType=='Unknown.';
	};

	$scope.weaponUnknown = function(suspect) {
		return suspect.weapon=='Unknown.';
	};



}]);

redrumApp.controller('MarketController', ['$scope', '$window', '$location', 'redrumAppServices', '$filter', 'ngTableParams', function($scope, $window, $location, redrumAppServices, $filter, ngTableParams) {

	var atLocation = function(currentElement) {
			//console.log('Current element: ', currentElement);
			//console.log('Location Url: ', $location.url());
			//console.log('Location Hash: ', $location.hash());

			//return currentElement===$location.hash() ? {active : true} : {active : false};
			return currentElement===$location.hash();
	};

	$scope.isCredit = atLocation('credit');
	$scope.isCoupons = atLocation('coupons');
	$scope.isRecommended = atLocation('recommended');
	$scope.isProducts = atLocation('products');
	$scope.isCart = atLocation('cart');
	$scope.isInventory = atLocation('inventory');
	$scope.isOrders = atLocation('orders');

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

	$scope.processCart = function(callData) {
		var bustCache = true;
		redrumAppServices.postAction(callData, bustCache).then(
			function(data) {
				$scope.cart = data;
				$window.location.href = '/market#cart';
			});
	};

	$scope.redeemCoupon = function(callData, couponCode) {

		var bustCache = true;
		var redeemData = {
			method : callData.method,
			href : callData.href + couponCode
		};

		redrumAppServices.postAction(redeemData, bustCache).then(
			function(data) {
				$window.location.href = '/market#coupons';
			});
	};

}]);

redrumApp.controller('AlertController', ['$scope', 'redrumAppServices', function($scope, redrumAppServices) {

	$scope.getAlerts = function() {
		redrumAppServices.alerts().then(
			function(data) {
				//console.log(data);
				$scope.alerts = data;
			});
	};

	$scope.closeAlert = function(index) {
		$scope.alerts.splice(index, 1);
	};

}]);

redrumApp.controller('UserController', ['$scope', '$window', 'redrumAppServices', function($scope, $window, redrumAppServices) {

	$scope.signInWithFaceBook = function() {
		redrumAppServices.signInWithFaceBook().then(
			function(url) {
				$window.location.href = url;
			});
	};

	$scope.signInWithGitHub = function() {
		redrumAppServices.signInWithGitHub().then(
			function(url) {
				$window.location.href = url;
			});
	};

}]);
