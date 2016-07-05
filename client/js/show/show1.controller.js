/*angular.module('show.controller', [])
	.directive('showssearch', function(){
		return {
			restrict:'EA',
			templateUrl:'views/resultsearch.html'
		}
	})
	.controller('ShowController', function ($scope, showResource) {
		$scope.show = show;

		$scope.getDetails = function () {
			showResource.query({
				id: $scope.id
			}, function (response) {
				$scope.show = show;
			});	
		};

	});*/

	angular.module('show.controller',[])
	.controller('ShowController',function ($scope, show) {
		$scope.show = show;
	});