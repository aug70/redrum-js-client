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


		creditClientToken : function() {
			return $http.get('/api/creditClientToken').then(
				function(result){
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
			},
		orders : function() {
			return $http.get('/api/orders').then(
				function(result) {
					return result.data;
				});
			},
		alerts : function() {
				return $http.get('/alerts').then(
					function(result) {
						return result.data;
				});
			},
		signInWithFaceBook : function() {
			return $http.get('/user/signInWithFaceBook').then(
					function(result) {
						return result.data;
				});
			},

		signInWithGitHub : function() {
			return $http.get('/user/signInWithGitHub').then(
					function(result) {
						return result.data;
				});
			},
		gameLevels : function() {
			return $http.get('/api/gameLevels').then(
					function(result) {
						//console.log(result);
						return result.data;
				});
			},
		postAction : function(callData, bustCache) {
			bustCache = bustCache || false;
			return $http({
				method: 'post',
				url: '/api/postAction',
				data: {
					'bustCache' : bustCache,
					'callData' : callData
				},
				headers: {'Content-Type': 'application/json;charset=utf-8'}
			}).then(
				function(response) {
					// success
					// console.log('Success');
					// console.log(response.data);
					// console.log(response.headers);
					// console.log(response.status);
					return response;
					}, 
				function(response) {
					// console.log('Failure');
					// console.log(response.data);
					// console.log(response.headers);
					// console.log(response.status);
					return response;
				});
			}
	};
});