/*
* You'll create a trivia game that shows only one question until the player answers it or their time runs out.

* If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

* The scenario is similar for wrong answers and time-outs.*/


//VARIABLES
//Array of objects that include questions, answers and images. The answers will be an array within this array.
var questionArray = [
    {
        question: "What color is the clear daytime sky?",
        answers: {a: 'red', b: 'yellow', c: 'blue', d: 'green'},
        correctAnswer: "c",
        image: "assets/images/placeholder.jpg"
    },
    {
        question: "On which planet do we live?",
        answers: {a: 'Earth', b: 'Mars', c: 'Jupiter', d: 'Saturn'},
        correctAnswer: "a",
        image: "assets/images/placeholder.jpg"
    },


    {
        question: "What does Dominos deliver?",
        answers: {a: 'doughnuts', b: 'pizza', c: 'eggplant', d: 'paper'},
        correctAnswer: "b",
        image: "assets/images/placeholder.jpg"
    },

    {
        question: "What state holds the Minnesota State Fair?",
        answers: {a: 'Florida', b: 'California', c: 'Iowa', d: 'Minnesota'},
        correctAnswer: "d",
        image: "assets/images/placeholder.jpg"
    }
]
//console.log(questionArray[1].question)
for (var i = 0; i < questionArray.length; i++){
    $("#display-current-question").html(questionArray[i].question);
    $("#display-current-answer-options").html('<form>' +
  '<input type="radio" name="questionArray.answers.a" >'<br>
  '<input type="radio" name="questionArray.answers.b" >'<br>
  '<input type="radio" name="questionArray.answers.c" >'<br>
  '<input type="radio" name="questionArray.answers.d" >'+
'</form>')
//Create display variable

//var display = false
//document.getElementById("myP").style.visibility = "hidden"; 
//$("#currentQA").style.visibility("hidden")
//create timer
    //  Set counter to 15.
    var number = 15;

   /* var questionTimeout = setTimeout(function() {
        alert("Alert #1: Called automatically 1 second after page load.");
      }, 1000); */

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;
    //  When the resume button gets clicked, execute the run function.
    $("#startGame").on("click", run);

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    //  *****BUG FIX******** 
    //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
    function run() {
     number = 15;
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;
     // $("#currentQA").style.visibility("visible")

      //  Show the number in the #show-number tag.
      $("#questionTimer").html("<h2>" + number + "</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();
        

        //  Alert the user that time is up.
        alert("Time Up!");
       // $("#currentQA").style.visibility("hidden")
      }
    }
    //  The stop function
    function stop() {

        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.
        clearInterval(intervalId);
        $("#questionTimer").html("");
        $("#display-current-question").html(" ");
      }
//Start the game

//Create a loop that goes through the questions and displays one at a time for a certain amount of time.
//for loop


    


//Show question
//Start timer - display timer
//Show question and four answer options

//Event listener to show which radio button user chooses. Note: Look at this tutorial: https://simplestepscode.com/javascript-quiz-tutorial/

 //If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input. 
    //Store user's answer

 //If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
    //

 //If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.
    //Store user's answer

//* On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page)

}



