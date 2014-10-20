'use strict';

angular.module('redrumApp', ['ngRoute', 'myApp.filters', 'myApp.services', 'myApp.directives']).
	
	config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		
		$routeProvider.
		  when('/dashboard', {
		    controller: DashBoardController
		  }).
		  otherwise({
		    controller: DashBoardController
		  });
		$locationProvider.html5Mode(true);
	
	}]);

