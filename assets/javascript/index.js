
// on Document Ready, Initiate Functions
$(document).ready(function() {


//---ARRAY INFORMATION---//

    // Creating Array for Questions, Answers, Correct Answer
    var questionInformation = [
        {
            title: "Question-1",
            question: "Which American President has received the Noble Peace Prize?",
            choice: ["Not Donald Trump", "Mike Pence", "President And Habitat For Humanity Home Builder, Jimmy Carter", "President Barack Obama"],
            answer: 3,
        },

        {
            title: "Question-2",
            question: "What is Caitlan's Favorite Dish?",
            choice: ["Risotto", "Polenta", "Lasagna", "All Of The Above"],
            answer: 3,
        },

        {
            title: "Question-3",
            question: "What is a Black Hole?",
            choice: ["A Hole That Is Black", "A Region Of Spacetime Exhibiting Gravitational Acceleration So Strong That Nothing - NO Particles Or Even Electromagnetic Radiation Such As Light — Can Escape From It", "A Very Dark Hole", "Answers A And C"],
            answer: 1,
        },
    ];


    //---VARIABLES---//
    var choiceOptions = [];
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var incompleteAnswers = 0;
    var counter = 2;
    var time = setInterval(countDown, 1000);


    //---TIMER INFORMATION---//

    // Displaying Timer and Counter
    $("#display-4").text(counter);
    createQuestions();
    // Starting timer function countDown
    function countDown() {
        counter--;
        $("#display-4").text(counter);

        // when counter = 0, showResults
        if (counter === 0) {
            incompleteAnswers++;
            stopCounter();
        } //else if (counter !== 0) {
            //wrongAnswers++;
            //stopCounter();
        //}
        console.log(counter);
    };

    // stopCounter to showResults bootstrap modal
    function stopCounter() {
        clearInterval(time);
        $('#results').modal('show');
    };

    // create questions to populate within HTML
    function createQuestions() {
        for (var i = 0; i < questionInformation.length; i++) {
            $(".card-header").text(questionInformation[i].title);
            console.log(questionInformation[i].title);

            for (var j = 0; j < questionInformation[j].question.length; j++) {
                $(".card-title").html(questionInformation[j].question);
                console.log(questionInformation[j].question);
            };
        };
    }

console.log("Document Ready!");
console.log(questionInformation);

}); //---END OF DOCUMENT READY---//