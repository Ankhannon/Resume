(function(){
	angular
		.module('myApp')
		.controller('NodeCtrl', NodeCtrl);

    function NodeCtrl(LibrarySrv, $location, $routeParams, $window) {
      var book = this;
      book.stories = LibrarySrv.stories;
      book.choiceOne = choiceOne;
      book.choiceTwo = choiceTwo;
			book.goHome = goHome;
			book.goGithub = goGithub;
			book.goLinkedin = goLinkedin;
			book.goResume = goResume;
      book.node = LibrarySrv.getNode($routeParams.storyid, $routeParams.nodeid);

      function choiceOne(id) {
        	$location.url('/library/'+ $routeParams.storyid + '/' + id)
      };
      function choiceTwo(id) {
        	$location.url('/library/'+ $routeParams.storyid + '/' + id)
      };

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



    }
})();
