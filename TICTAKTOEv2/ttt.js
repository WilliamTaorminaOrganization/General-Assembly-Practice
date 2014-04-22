function Ticktackctrl($scope){

	$scope.board = ["a", "b", " ", " ", " ", " ", " ", " ", " "];

	$scope.clicker = function (cellIndex) {
		$scope.board[cellIndex] = "X";
	}
}

