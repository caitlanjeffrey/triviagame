
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
var correctAnswers = 0;
var wrongAnswers = 0;
var incompleteAnswers = 0;


//---TIMER INFORMATION---//
    // Creating Timer
    var time = setInterval(countDown, 1000);

    // Timer Start = 90 seconds
    var counter = 15

    // Displaying Timer and Counter
    $("#display-4").text(counter);

    // Starting timer function countDown
    function countDown() {
        counter--
        $("#display-4").text(counter);
        // when counter = 0, showResults
        if (counter === 0) {
            clearInterval(time)
            //showResults();
        };
        console.log(counter);
    };


console.log("Document Ready!");
console.log(questionInformation);
}); //---END OF DOCUMENT READY---//


function showQuestionCard() {
    for (var i = 0; i < questionInformation.length; i++) {
        var card = `<div>`
        var cardTitle = `<h1>${questionInformation[i].t}</h1>`
        $(card).append(cardTitle);
    }
}
//console.log(showQuestionCard(cardTitle));

// function showQuestion() {
//     for (var i = 0; i < questionInformation.length; i++) {
//         var card = 

//     }
//     for (var j = 0; j < questionInformation.length; j++) {
//         var card = `<div>`
//         var questionTitle = `<h1>${questionInformation[i].q}</h1>`
//         card.append(questionTitle);
//             console.log(questionTitle);
//         for (var j = 0; j < questionInformation[i].a.length; j++) {
//             var answerRadioButton = 
//                 `<input type="radio" name=${q} answers=${j}>
//                 ${questionInformation[i].a[j]}
//                 <br>`
//             card.append(answerRadioButton);
//         }
//     $("#questions").append(card)
//     }
// }

// console.log(showQuestion);
