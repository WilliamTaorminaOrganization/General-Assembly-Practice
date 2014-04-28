function Ticktackctrl($scope){

//this is the board, represented as an array.

	$scope.board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

	$scope.turn = 'X';

	$scope.clicker = function (cellIndex) {

		if ($scope.board[cellIndex] == 'O' || $scope.board[cellIndex] == 'X'){
			return;
		}

		$scope.board[cellIndex] = $scope.turn;
		if ($scope.turn == 'X')
		{
			$scope.turn = 'O';
		} else {
			$scope.turn = 'X';
		}
		console.log(cellIndex);

		$scope.checkWin();
	};

	$scope.resetboard = function (){$scope.board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];};

	$scope.checkWin = function (){

		// horizontal wins
		if($scope.board[0]==$scope.board[1] && $scope.board[1] == $scope.board[2] && $scope.board[0] != " ")
			{
			$scope.winner = $scope.board[0];
			console.log("The winner is " + $scope.winner);
			alert("You Won");
			$scope.resetboard();
			}
		else if ($scope.board[3]==$scope.board[4] && $scope.board[4] == $scope.board[5] && $scope.board[3] != " ")
			{
			$scope.winner = $scope.board[3];
			console.log(winner);
			$scope.resetboard();
			}
		else if ($scope.board[6]==$scope.board[7] && $scope.board[7] == $scope.board[8] && $scope.board[6] != " ")
			{
			$scope.winner = $scope.board[3];
			console.log("winner");
			$scope.resetboard();
			}

		// vertical wins
		else if($scope.board[0]==$scope.board[3] && $scope.board[3] == $scope.board[6] && $scope.board[0] != " ")
			{
			$scope.winner = $scope.board[0];
			console.log("winner");
			$scope.resetboard();
			}
		else if ($scope.board[1]==$scope.board[4] && $scope.board[4] == $scope.board[7] && $scope.board[1] != " ")
			{
			$scope.winner = $scope.board[3];
			console.log("winner");
			$scope.resetboard();
			}
		else if ($scope.board[2]==$scope.board[5] && $scope.board[5] == $scope.board[8] && $scope.board[2] != " ")
			{
			$scope.winner = $scope.board[3];
			console.log("winner");
			$scope.resetboard();
			}

			// diagonal wins

		else if ($scope.board[0]==$scope.board[4] && $scope.board[4] == $scope.board[8] && $scope.board[0] != " ")
			{
			$scope.winner = $scope.board[3];
			console.log("winner");
			$scope.resetboard();
			}
		else if ($scope.board[2]==$scope.board[4] && $scope.board[4] == $scope.board[6] && $scope.board[2] != " ")
			{
			winner = $scope.board[3];
			console.log("winner");
			$scope.resetboard();
			}

	$scope.checkTie = function (){

		if($scope.board[0]!=$scope.board[1] && $scope.board[0] != " ")
			{
			$scope.winner = $scope.board[0];
			console.log("The winner is " + $scope.winner);
			alert("You Won");
			$scope.resetboard();
			}
		else if ($scope.board[3]==$scope.board[4] && $scope.board[4] == $scope.board[5] && $scope.board[3] != " ")
			{
			$scope.winner = $scope.board[3];
			console.log(winner);
			$scope.resetboard();
			}
		else if ($scope.board[6]==$scope.board[7] && $scope.board[7] == $scope.board[8] && $scope.board[6] != " ")
			{
			$scope.winner = $scope.board[3];
			console.log("winner");
			$scope.resetboard();
			}

		// vertical wins
		else if($scope.board[0]==$scope.board[3] && $scope.board[3] == $scope.board[6] && $scope.board[0] != " ")
			{
			$scope.winner = $scope.board[0];
			console.log("winner");
			$scope.resetboard();
			}
		else if ($scope.board[1]==$scope.board[4] && $scope.board[4] == $scope.board[7] && $scope.board[1] != " ")
			{
			$scope.winner = $scope.board[3];
			console.log("winner");
			$scope.resetboard();
			}
		else if ($scope.board[2]==$scope.board[5] && $scope.board[5] == $scope.board[8] && $scope.board[2] != " ")
			{
			$scope.winner = $scope.board[3];
			console.log("winner");
			$scope.resetboard();
			}

			// diagonal wins

		else if ($scope.board[0]==$scope.board[4] && $scope.board[4] == $scope.board[8] && $scope.board[0] != " ")
			{
			$scope.winner = $scope.board[3];
			console.log("winner");
			$scope.resetboard();
			}
		else if ($scope.board[2]==$scope.board[4] && $scope.board[4] == $scope.board[6] && $scope.board[2] != " ")
			{
			$scope.winner = $scope.board[3];
			console.log("winner");
			$scope.resetboard();
			}
	};

	};

}
