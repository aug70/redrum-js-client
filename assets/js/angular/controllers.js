'use strict';

function DashBoardController($scope, redrumAppServices) {

	console.log('DashBoard Controller ..........');
	$scope.dashboard = redrumAppServices.dashboard();
}

function MenuController($scope, redrumAppServices) {
	
	console.log('Menu Controller ..........');
	$scope.userData = redrumAppServices.userData();
}

function MarketController($scope, redrumAppServices) {
	console.log('Market Controller ..........');
	$scope.cart = redrumAppServices.cart();
	$scope.storeProducts = redrumAppServices.storeProducts();
	$scope.inventory = redrumAppServices.inventory();
	console.log($scope);
}

function ProfileController($scope, $resource) {
	
}

function StatsController($scope, $resource) {

}	