'use strict';

var redrumApp = angular.module('redrumApp', ['ui.bootstrap', 'ngRoute', 'ngResource', 'ngTable', 'redrumAppFilters', 'redrumAppDirectives', 'redrumAppServices']).
 	
	config(['$routeProvider', '$resourceProvider', '$locationProvider', function($routeProvider, $resourceProvider, $locationProvider) {
		
		$locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
		});
	
	}]);