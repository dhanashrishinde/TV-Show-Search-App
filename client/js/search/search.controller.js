angular.module('search.controller', [])
	.directive('showssearch', function(){
		return {
			restrict:'EA',
			templateUrl:'views/resultsearch.html'
		}
	})
	.controller('SearchController', function ($scope, searchResource) {

		$scope.getShows = function () {
			searchResource.query({
				name: $scope.name
			}, function (response) {
				$scope.search = response;
			});	
		};

	});