'use strict';

/* Directives */
angular.module('redrumAppDirectives', [])

.directive('dashboard', ['redrumAppServices', function(redrumAppServices){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'templates/dashboard.html',
		link: function link(scope) {

			init();
			function init() {
				redrumAppServices.dashboard().then(
					function(data) {
						scope.dashboard = data;
				});
			};
		}
	};
}])


.directive('gameLevels', ['redrumAppServices', function(redrumAppServices){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'templates/gameLevels.html',
		link: function link(scope) {

			init();
			function init() {
				redrumAppServices.gameLevels().then(
					function(data) {
						scope.gameLevels = data;
				});
			}

			scope.filterLevelsOnly = function(element) {
				return element.rel.match(/^level/) ? true : false;
			};

		}
	};
}])


.directive('stats', ['redrumAppServices', function(redrumAppServices){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'templates/stats.html',
		link: function link(scope) {

			init();
			function init() {
				redrumAppServices.stats().then(
					function(data) {
						scope.stats = data;
				});
			};

			scope.filterFunction = function(element) {
				return element.label.match(/^Played/) ? false : true;
			};
		}
	};
}])