'use strict';

function DashBoardController($scope, redrumAppServices) {

	redrumAppServices.dashboard().then(
		function(data) {
			$scope.dashboard = data;
		});
}

function MenuController($scope, redrumAppServices) {
	
	redrumAppServices.user().then(
		function(data) {
			$scope.user = data;
		});
}

function MarketController($scope, redrumAppServices) {
	
	redrumAppServices.storeProducts().then(
		function(data) {
			$scope.storeProducts = data;
		});
	
	redrumAppServices.cart().then(
		function(data) {
			$scope.cart = data;
		});

	redrumAppServices.inventory().then(
		function(data) {
			$scope.inventory = data;
		});
}

function ProfileController($scope, $resource) {
	
}

function StatsController($scope, $resource) {

}	