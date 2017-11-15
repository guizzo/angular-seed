(function(){

	"use strict";

	angular
		.module('Posts', [

		])
		.controller('PostController', ['$scope', PostController]);

	function PostController(scope){
		scope.message = 'Post View loaded from controller';
	}

})();
