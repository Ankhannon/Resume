(function(){
	angular
		.module('myApp')
		.controller('StoryCtrl', StoryCtrl);

    function StoryCtrl(LibrarySrv, $location, $routeParams) {
      var book = this;
      book.stories = LibrarySrv.stories;
      book.enterStory = enterStory;
			book.goHome = goHome;
			book.goGithub = goGithub;
			book.goLinkedin = goLinkedin;
			book.goResume = goResume;
			book.story = LibrarySrv.getStory($routeParams.storyid);

      function enterStory(id) {
        $location.url('/library/'+ $routeParams.storyid + '/' + 0)
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
