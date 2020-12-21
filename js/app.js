var app = angular.module("EcoGame", []);

app.controller("Game", ["$scope", function($scope) {
	$scope.current = 0;
	$scope.questions = [
		{
			question: "What is the most common pairing of colors in fast food logos?",
			options: ["Red and yellow", "Red and green", "Brown and green"],
			addClass: "",
			func: "addC()",
			correct: "Red and yellow",
			index: 0
		},
		{
			question: "Plant-based burgers are always healthier then regular burgers.",
			options: ["True", "False", ""],
			addClass: "disabled",
			func: "",
			correct: "False",
			index: 1
		},
		{
			question: "All natural foods are healthy.",
			options: ["True", "False", ""],
			addClass: "disabled",
			func: "",
			correct: "False",
			index: 2
		},
		{
			question: "What is the most common pairing of colors in fast food logos?",
			options: ["Red and yellow", "Red and green", "Brown and green"],
			func: "addC()",
			correct: "Red and yellow",
			addClass: "",
			index: 3
		},
		{
			question: "What is the most common pairing of colors in fast food logos?",
			options: ["Red and yellow", "Red and green", "Brown and green"],
			func: "addC()",
			correct: "Red and yellow",
			addClass: "",
			index: 4
		},
		{
			question: "What is the most common pairing of colors in fast food logos?",
			options: ["Red and yellow", "Red and green", "Brown and green"],
			func: "addC()",
			correct: "Red and yellow",
			addClass: "",
			index: 5
		},
		{
			question: "What is the most common pairing of colors in fast food logos?",
			options: ["Red and yellow", "Red and green", "Brown and green"],
			func: "addC()",
			correct: "Red and yellow",
			addClass: "",
			index: 6
		}
	]
	$scope.answers = [];
	$scope.correct = ["A", "B", "B", "A", "B", "C", "A"];

	$scope.welcomeMsg = true;
	$scope.loadGame = false;

	$scope.startGame = function() {
		$scope.welcomeMsg = false;
		$scope.loadGame = true;

		$scope.checkWinner = function() {
			if ($scope.answers.length === $scope.correct.length) {
				let correctAnswers = 0;
				for(let i = 0; i < $scope.answers.length; i ++){
					if($scope.answers[i] === $scope.correct[i]){
						correctAnswers ++;
					}
				}
				if(correctAnswers === $scope.correct.length){
					$scope.isWinner = true;
				}
				else {
					$scope.correctItems = correctAnswers;
					$scope.notWinner = true;
				}
			}
		}
	};

	$scope.isWinner = false;
	$scope.notWinner = false;

	$scope.restartGame = function() {
		location.reload();
	}

	$scope.addA = function() {
		$scope.answers.push("A");
		$scope.checkWinner();
		$scope.current ++;
	};

	$scope.addB = function() {
		$scope.answers.push("B");
		$scope.checkWinner();
		$scope.current ++;
	};

	$scope.addC = function() {
		$scope.answers.push("C");
		$scope.checkWinner();
		$scope.current ++;
	};
}]);
