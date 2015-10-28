'use strict';

var redrumApp = angular.module('redrumApp', ['ui.bootstrap', 'ngRoute', 'ngResource', 'ngTable', 'redrumAppFilters', 'redrumAppDirectives', 'redrumAppServices']).
 	
	config(['$locationProvider', '$httpProvider', function($locationProvider, $httpProvider) {
		
		$locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
		});
		$httpProvider.defaults.useXDomain = true;
	
	}]);