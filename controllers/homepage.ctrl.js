(function(){
	angular
		.module('myApp')
		.controller('HomepageCtrl', HomepageCtrl);

    function HomepageCtrl($location, $routeParams, $window) {
      var home = this;
      home.goGithub = goGithub;
      home.goLinkedin = goLinkedin;
			home.goHome = goHome;


      // NavBar Begins

			function goHome() {
        $location.url('/')
      };
      function goGithub() {
        window.location.href = 'https://github.com/Ankhannon';
      };
      function goLinkedin() {
        window.location.href = 'https://ca.linkedin.com/in/adam-dykaar-58259266';
      };

      // NavBar Ends
    }
})();
