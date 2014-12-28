'use strict';

var service = angular.module('redrumAppServices', []);

service.factory('redrumAppServices', function($http) {

    return {
    	
    	dashboard : function() {
			return $http.get('/api/dashboard').then(
				function(result) {
					return result.data;
				});
			},

		user : function() {
			return $http.get('/api/user').then(
				function(result) {
					return result.data;
				});
			},

		cart : function() {
			return $http.get('/api/cart').then(
				function(result) {
					return result.data;
				});
			},

		products : function() {
			return $http.get('/api/products').then(
				function(result) {
					return result.data;
				});
			},

		inventory : function() {
			return $http.get('/api/inventory').then(
				function(result) {
					return result.data;
				});
			},
		stats : function() {
			return $http.get('/api/stats').then(
				function(result) {
					return result.data;
				});
			}
	}
});