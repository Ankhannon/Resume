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
        .when('/library/:storyid',{
          templateUrl:'partials/story.html',
          controller:'StoryCtrl as ctrl'
        })
				.when('/library/:storyid/:nodeid',{
					templateUrl:'partials/node.html',
					controller:'NodeCtrl as ctrl'
				})
				.when('/resume',{
					templateUrl:'partials/resume.html',
					controller:'ResumeCtrl as ctrl'
				})
				.otherwise({
					redirectTo:'/home'
				})

	});
})();
