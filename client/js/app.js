angular.module('app', 
	['ngRoute', 'ngResource', 'search.controller', 'fav.controller', 'search.service', 'schedule.controller', 'show.controller', 'show.service'])
	.filter('trustHTML', function($sce)
	{
		return function(text)
		{
			return $sce.trustAsHtml(text);
		}
	})
	.config(['$routeProvider', '$locationProvider' , 
		function ($routeProvider, $locationProvider) {

			$routeProvider
				.when('/', {
					templateUrl: 'views/search.html',
					controller: 'SearchController'
				})
				.when('/fav', {
					templateUrl: 'views/fav.html',
					controller: 'FavController'
				})
				.when('/schedule', {
					templateUrl: 'views/fav.html',
					controller: 'ScheduleController'
				})
				.when('/show/:id', {
          			templateUrl: 'views/show.html',
          			controller: 'ShowController',
          		resolve: {
            		show: function ($route, ShowService) {
              			return ShowService.get({id: $route.current.params.id});
            		}
          		}
        		})
				.otherwise({
					redirectTo: '/'
				});

			$locationProvider.html5Mode(true);
	}]);

	