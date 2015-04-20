app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {
    $scope.activeCat;

    FlashCardsFactory.getFlashCards().then(
        function(response) {
            $scope.flashCards = response;
        });

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
            var score = ScoreFactory;
            if (answer.correct)
                score.correct++;
            else
                score.incorrect++;
		}
	}

    $scope.getCategoryCards = function (category) {
        FlashCardsFactory.getFlashCards(category).then(
        function(response) {
            $scope.flashCards = response;
        });
        $scope.activeCat = category;
    }

    $scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
    ];
});