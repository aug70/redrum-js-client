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
			}
		}
	};
}])


.directive('game', ['$window', '$uibModal', 'redrumAppServices', function($window, $uibModal, redrumAppServices){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: '/templates/game.html',
		link: function link(scope) {

			showLevels();
			function showLevels() {
				redrumAppServices.gameLevels().then(
					function(data) {
						scope.gameLevelRows = splitRow(data.links, 3);
				});
			}

			function splitRow(input, count) {
				// console.log("input:" + input);
				// console.log("count:" + count);
				var out = [];
					if(typeof input === "object"){
			  			for (var i=0, j=input.length; i < j;) {
			  				//console.log('input[i].rel: ' + input[i].rel);
			  				if(input[i].rel==='self') {
			  					i += 1;
			  					continue;
			  				}
			  				out.push(input.slice(i, i+count));
			  				i+=count;
			  			}
			  		}
		   		return out;
			}

			scope.quitGame = function(callData) {
				redrumAppServices.postAction(callData, true).then(
					function(data) {
						$window.location.href = '/game';
					});
			};

			scope.continueGame = function(callData) {
				redrumAppServices.postAction(callData).then(
					function(response) {
						redrumAppServices.postAction(response.data.links[0]).then(
							function(response){
								scope.game = response.data;
								var modalInstance = $uibModal.open({
									animation: false,
									templateUrl: '/templates/gamePlay.html',
									controller: 'GameController',
									scope : scope,
									size: 'lg'
								});
							});
					});
			};

			scope.newGame = function(callData) {
				redrumAppServices.postAction(callData, true).then(
					function(response) {
						console.log(response.data.links);
						redrumAppServices.postAction(response.data.links[0]).then(
							function(response){
								$window.location.href = '/game';
								scope.game = response.data;
							});
					});
			};

			scope.filterLevelsOnly = function(element) {
				return element.rel.match(/^level/) ? true : false;
			};

			scope.filterQuit = function(element) {
				return element.rel.match(/^quit/) ? true : false;
			};

			scope.filterContinue = function(element) {
				return element.rel.match(/^continue/) ? true : false;
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
			}

			scope.filterFunction = function(element) {
				return element.label.match(/^Played/) ? false : true;
			};
		}
	};
}])

.directive('orders', ['redrumAppServices', function(redrumAppServices){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'templates/orders.html',
		link: function link(scope) {
			init();
			function init() {
				redrumAppServices.orders().then(
					function(data) {
						scope.orders = data;
				});
			}
		}
	};
}])

.directive('inventory', ['redrumAppServices', function(redrumAppServices){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'templates/inventory.html',
		link: function link(scope) {
			init();
			function init() {
				redrumAppServices.inventory().then(
					function(data) {
						scope.inventory = data;
				});
			}
		}
	};
}])

.directive('credit', ['$http', 'redrumAppServices', function($http, redrumAppServices){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'templates/credit.html',
		link: function link(scope) {

      scope.showForm = true;


      scope.processPayment = function () {

        //$scope.message = 'Processing payment...';
        scope.showForm = true;


        redrumAppServices.creditClientToken().then(
          function(data) {
            // create new client and tokenize card
            var client = new braintree.api.Client({clientToken: data});
            client.tokenizeCard({
              number: scope.creditCardNumber,
              expirationDate: scope.expirationDate
            }, function (err, nonce) {

              $http({
                method: 'POST',
                url: '/api/paymentCheckout',
                data: {
                  amount: scope.amount,
                  payment_method_nonce: nonce
                }
              }).success(function (data) {

                //console.log('Success...', data);
                scope.showForm = false;
                //
                if (data.success) {
                  scope.message = 'Payment successful.';
                } else {
                  scope.message = data.message + ': ' + data.errorMessages[0];
                }

              }).error(function (error) {
                //console.log('Error...', error);
                scope.message = 'There was a problem connecting to server. Please try again.';
                scope.showForm = false;
              });

            });

          });

      };

    }
	};
}]);
