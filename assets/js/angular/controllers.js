'use strict';

function DashBoardController($scope, redrumAppServices) {

	console.log('DashBoard Controller ..........');
	$scope.dashboard = redrumAppServices.dashboard();
}

function MenuController($scope, redrumAppServices) {
	
	console.log('DashBoard Controller ..........');
	$scope.userData = redrumAppServices.userData();
}

function MarketController($scope, $resource) {
	
}

function ProfileController($scope, $resource) {
	
}

function StatsController($scope, $resource) {

}	