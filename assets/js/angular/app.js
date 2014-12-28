'use strict';

var redrumApp = angular.module('redrumApp', ['ui.bootstrap', 'ngRoute', 'ngResource', 'redrumAppFilters', 'redrumAppServices', 'redrumAppDirectives']).
 	
	config(['$routeProvider', '$resourceProvider', '$locationProvider', function($routeProvider, $resourceProvider, $locationProvider) {
		
		$locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
		});
	
	}]);

