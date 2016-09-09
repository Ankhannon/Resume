(function(){

	angular
		.module('myApp', ['ngRoute']);

	angular
		.module('myApp')
		.config(function($routeProvider) {
			$routeProvider
				.when('/home',{
					templateUrl:'partials/homepage.html',
					controller:'HomepageCtrl as ctrl',
				})
				.otherwise({
					redirectTo:'/home'
				})

	});
})();
