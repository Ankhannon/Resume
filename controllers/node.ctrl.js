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



    }
})();
