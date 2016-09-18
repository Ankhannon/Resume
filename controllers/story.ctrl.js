(function(){
	angular
		.module('myApp')
		.controller('StoryCtrl', StoryCtrl);

    function StoryCtrl(LibrarySrv, $location, $routeParams) {
      var book = this;
      book.stories = LibrarySrv.stories;
      book.enterStory = enterStory;
			book.goHome = goHome;
			book.story = LibrarySrv.getStory($routeParams.storyid);
			console.log(book.story)

      function enterStory(id) {
        $location.url('/library/'+ $routeParams.storyid + '/' + 0)
      };
			function goHome() {
        $location.url('/')
      };


    }
})();
