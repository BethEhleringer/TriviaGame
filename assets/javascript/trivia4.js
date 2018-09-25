/*
* You'll create a trivia game that shows only one question until the player answers it or their time runs out.

* If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

* The scenario is similar for wrong answers and time-outs.*/


//VARIABLES
//Array of objects that include questions, answers and images. The answers will be an array within this array.
var questionArray = [
    {
        question: "What color is the clear daytime sky?",
        answers: { a: 'red', b: 'yellow', c: 'blue', d: 'green' },
        correctAnswer: "c",
        image: "assets/images/placeholder.jpg"
    },
    {
        question: "On which planet do we live?",
        answers: { a: 'Earth', b: 'Mars', c: 'Jupiter', d: 'Saturn' },
        correctAnswer: "a",
        image: "assets/images/placeholder.jpg"
    },

    {
        question: "What does Dominos deliver?",
        answers: { a: 'doughnuts', b: 'pizza', c: 'eggplant', d: 'paper' },
        correctAnswer: "b",
        image: "assets/images/placeholder.jpg"
    },

    {
        question: "What state holds the Minnesota State Fair?",
        answers: { a: 'Florida', b: 'California', c: 'Iowa', d: 'Minnesota' },
        correctAnswer: "d",
        image: "assets/images/placeholder.jpg"
    },

    {
        question: "What flavor is hot chocolate?",
        answers: { a: 'pineapple', b: 'vanilla', c: 'garlic', d: 'none of the above' },
        image: "assets/images/placeholder.jpg"
    }
]

var displayQ =

    //timer function



    //  Step 3:
    //  Fill in the blanks to these functions.
    function fifteenSeconds() {
        $("#display-current-question").html(" ");
        console.log("10 seconds left");
    }


//
questionIndex = 0;
function renderQuestion() {
    if (questionIndex <= (questionArray.length - 1)) {
        document.querySelector("#display-current-question").innerHTML = questionArray[questionIndex].question;
        setTimeout(fifteenSeconds, 1000 * 5);
        questionIndex++
    }

    else {
        document.querySelector("#display-current-question").innerHTML = "game over";
    }
}
renderQuestion(questionIndex)