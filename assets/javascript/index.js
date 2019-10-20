// on Document Ready, Initiate Functions
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
            answer: 2,
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
    var userAnswer = "";
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var incompleteAnswers = 0;
    var counter = 2;
    var modalCounter = 5;
    var time = setInterval(countDown, 1000);

    
    //---TIMER INFORMATION---//

    // Displaying Timer and Counter
    $("#display-4").text(counter);
    createQuestions();
    console.log("Question Number: " + questionNumber);

    // Starting timer function countDown
    function countDown() {
        counter--;
        $("#display-4").text(counter);

        // when counter = 0, showResults
        if (counter === 0) {
            incompleteAnswers++;
            stopCounter();
            console.log("Incomplete: " + incompleteAnswers);

        } if (userAnswer != questionInformation[i].answer) {
            wrongAnswers++;
            stopCounter();
            console.log("Wrong: " + wrongAnswers);
        }
            $("#incomplete").text(incompleteAnswers);
            $("#wrong").text(wrongAnswers);

            console.log("Time: " + counter);
            console.log("Correct: " + correctAnswers);
    };

    // stopCounter to showResults bootstrap modal
    function stopCounter() {
        clearInterval(time);
        $('#results').modal('show');
    };

    // create questions to populate within HTML
    function createQuestions() {
        // identifying which html element to place my object information
        $(".card-header").text(questionInformation[questionNumber].title);
        $(".card-title").html(questionInformation[questionNumber].question);

        // variables to build input radio buttons
        var answers = $("<input type='radio' name='q'/>");
        var answersLabel = $("<label>")
        
        answersLabel.attr("for", questionInformation[questionNumber].choice[0]);
        answersLabel.text(" " + questionInformation[questionNumber].choice[0]);

        console.log(questionInformation[questionNumber].title);
        console.log(questionInformation[questionNumber].question);
        console.log(questionInformation[questionNumber].choice[0]);

        $("#radio-group").append(answers);
        $("#radio-group").append(answersLabel);
        questionNumber++;
    };

console.log("Document Ready!");
console.log(questionInformation);
}); 

//---END OF DOCUMENT READY---//