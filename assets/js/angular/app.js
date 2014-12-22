'use strict';

angular.module('redrumApp', ['ui.bootstrap', 'ngRoute', 'ngResource', 'redrumAppFilters', 'redrumAppServices', 'redrumAppDirectives']).
 	
	config(['$routeProvider', '$resourceProvider', '$locationProvider', function($routeProvider, $resourceProvider, $locationProvider) {
		
		$routeProvider.
		  when('/dashboard', {
		    //templateUrl : '/views/includes/dashboard.jade',
		    controller  : DashBoardController
		  })
		  .when('/market', {
		    //templateUrl : '/views/includes/market.jade',
		    controller  : MarketController
		  })
		  .when('/profile', {
		    //templateUrl : '/views/includes/profile.jade',
		    controller  : ProfileController
		  })
		  .when('/stats', {
		    //templateUrl : '/views/includes/stats.jade',
		    controller  : StatsController
		  })
		  .otherwise({
		    //templateUrl : '/views/includes/dashboard.jade',
		    controller : DashBoardController
		  });
		  
		$locationProvider.html5Mode(true);
	
	}]);

