// Creating Array for Questions, Answers, Correct Answer
var questionInformation = [
    {
        t: "Question-1",
        q: "Which American President has received the Noble Peace Prize?",
        a: ["Not Donald Trump", "Mike Pence", "President and Habitat for Humanity Home Builder, Jimmy Carter", "President Barack Obama"],
        r: 3
    },
];

// Creating Timer
var time = setInterval(countDown, 1000);

// Timer Start = 90 seconds
var counter = 90

// Displaying Timer and Counter
$("#display-4").text(counter);

// Starting timer function countDown
function countDown() {
    counter--
    $("#display-4").text(counter);
    // when counter = 0, showResults
    if (counter ===0) {
        showResults();
    };
    console.log(counter);
};

// Creating a function to build each question and radio button answer



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


// showresults
//function showResults() {
    //clearInterval(time)


//}

//onclick on submit show result
//$("#btnresults").on("click", function(){
    //showResults()

//})

//showquestions()

//$("#question").html("<h2>" + questions[index].question + "</h2>");
//$("#answers").empty();
  ///
//for (var j = 0; j < questions[index].answers.length; j++) {
    //$("#answers").append(`<input class='clickBtn' type='radio' name='question-${index}' value='${questions[index].answers[j]}'>${questions[index].answers[j]}`
    //);
//}


