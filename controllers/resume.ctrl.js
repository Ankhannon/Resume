(function(){
	angular
		.module('myApp')
		.controller('ResumeCtrl', ResumeCtrl);

    function ResumeCtrl($location, $routeParams, $window) {
      var resume = this;
      resume.goGithub = goGithub;
      resume.goLinkedin = goLinkedin;
			resume.goHome = goHome;
      resume.goResume = goResume;


      // NavBar Begins

			function goHome() {
        $location.url('/')
      };
      function goResume() {
        $location.url('/resume')
      };

      function goGithub() {
        window.location.href = 'https://github.com/Ankhannon';
      };
      function goLinkedin() {
        window.location.href = 'https://www.linkedin.com/in/adamdykaar';
      };

      // NavBar Ends

    }
})();
