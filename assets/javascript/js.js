$(document).ready(function(){

    //---ARRAY INFORMATION---//

    // Creating Array for Questions, Answers, Correct Answer
    var questionInformation = [
        {
            title: "Question - 1",
            question: "Which American President has received the Noble Peace Prize?",
            choice: ["  Not Donald Trump", "  Mike Pence", "  President And Habitat For Humanity Home Builder, Jimmy Carter", "  President Barack Obama"],
            answer: 3,
        },

        {
            title: "Question - 2",
            question: "What is Caitlan's Favorite Dish?",
            choice: ["  Risotto", "  Polenta", "  Lasagna", "  All Of The Above"],
            answer: 0,
        },

        {
            title: "Question - 3",
            question: "What is a Black Hole?",
            choice: ["  A Hole That Is Black", "  A Region Of Spacetime Exhibiting Gravitational Acceleration So Strong That Nothing Can Escape From It", "  A Very Dark Hole", "  Answers A And C"],
            answer: 1,
        },
    ];

    //---VARIABLES---//
    var questionNumber = 0;
    var userAnswer = [];
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var incompleteAnswers = 0;
    var counter = 5;
    var time = setInterval(countDown, 1000);

    //---TIMER INFORMATION---//

    // Displaying Timer and Counter
    $("#display-4").text(counter);
    createQuestions();
    console.log("Question Number: " + questionNumber);
    
    function countDown() {
        counter--;
        $("#display-4").text(counter);

        // when counter = 0, showResults
        if (counter === 0) {
            incompleteAnswers++;
            stopCounter();
            $('#results').modal('show');

            $("#incomplete").text(incompleteAnswers);
            $("#answer-text").text(" Incomplete.");

            console.log("Incomplete: " + incompleteAnswers);
            resetGame();
        }; 

        $("input").on("click", function(){
            userAnswer = ($(this));
            console.log("User Answer: " + userAnswer);

            stopCounter();
            $('#results').modal('show');

            if (userAnswer === questionInformation[questionNumber].answer) {
                console.log("Question Correct Answer:" + questionInformation[questionNumber].answer);
                correctAnswers++;
                $("#correct").text(correctAnswers);
                $("#answer-text").text(" Correct!")

            }
            else {
                wrongAnswers++;
                $("#wrong").text(wrongAnswers);
                $("#answer-text").text(" Incorrect.")
            }
        });
        console.log("Time: " + counter);
    };
    
    // stopCounter to showResults bootstrap modal
    function stopCounter() {
        clearInterval(time);
    };

    // create resetGame function to add new questions
    function resetGame() {
        createQuestions(questionNumber++);
        countDown();

        // I can't seem to figure out how to remove the appended answers, with the next four.
    }

    // create questions to populate within HTML
    function createQuestions() {
        for (var i = 0; i < questionInformation.length; i++) {
            $(".card-header").text(questionInformation[questionNumber].title);
            $(".card-title").text(questionInformation[questionNumber].question);
        }
        // identifying which html element to place my object information
        for (var j = 0; j < 4; j++) {
            var answers = $("<li><input type='radio' name='q'/><span>" + questionInformation[questionNumber].choice[j] + "</span></li>");
            $("#radio-group").append(answers);
        }

        console.log(questionInformation[questionNumber].title);
        console.log(questionInformation[questionNumber].question);
        console.log(answers);
    }
});