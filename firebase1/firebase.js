angular.module("WillsTest", ["firebase"])
	.controller("WillsController", function($scope, $firebase){
		var willRef = new Firebase("https://willstest.firebaseio.com/");

		$scope.issues = $firebase(willRef);

		$scope.addOne = function(){
			willRef.push({title:$scope.title, body:$scope.body});
		};

	});