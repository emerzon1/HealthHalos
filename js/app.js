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
			question: "Every all natural food is healthy.",
			options: ["True", "False", ""],
			addClass: "disabled",
			func: "",
			correct: "False",
			index: 2
		},
		{
			question: "The color green is used by fast food restaurants in order to: ",
			options: ["Make consumers feel tired", "Make consumers hungry", "Make consumers believe the restaurant is healthy"],
			func: "addC()",
			correct: "make consumers believe the restaurant is healthy",
			addClass: "",
			index: 3
		},
		{
			question: "Does lettuce on burgers or fried chichen sandwiches make them healthy?",
			options: ["Yes", "No", ""],
			func: "addC()",
			correct: "No",
			addClass: "disabled",
			index: 4
		},
		{
			question: "How can consumers avoid health halos?",
			options: ["Become aware of the methods fast food restaurants use to trick customers", "Carefully read nutritional information instead of assuming how healthy foods are", "Both A and B"],
			func: "addC()",
			correct: "Both A and B",
			addClass: "",
			index: 5
		},
		{
			question: "Why is red used in many fast food restaurant logos?",
			options: ["Red makes people hungry", "Red makes people happy", "Red makes people believe that their food is healthy"],
			func: "addC()",
			correct: "Red makes people hungry",
			addClass: "",
			index: 6
		}
	]
	$scope.answers = [];
	$scope.correct = ["A", "B", "B", "C", "B", "C", "A"];

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
