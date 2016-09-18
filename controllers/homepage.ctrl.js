(function(){
	angular
		.module('myApp')
		.controller('HomepageCtrl', HomepageCtrl);

    function HomepageCtrl($location, $routeParams, $window, LibrarySrv) {
      var home = this;
      home.goGithub = goGithub;
      home.goLinkedin = goLinkedin;
			home.goHome = goHome;
			home.gotoStory = gotoStory;
			home.stories = LibrarySrv.stories;


      // NavBar Begins

			function goHome() {
        $location.url('/')
      };
      function goGithub() {
        window.location.href = 'https://github.com/Ankhannon';
      };
      function goLinkedin() {
        window.location.href = 'https://www.linkedin.com/in/adamdykaar';
      };

      // NavBar Ends

			function gotoStory(id) {
        $location.url('/library/' + id)
      };
    }
})();
