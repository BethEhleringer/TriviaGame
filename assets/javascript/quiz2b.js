$(document).ready(function () {
    //  Slideshow Activity
    //  ** SOLUTION **



    //Array of objects that include questions, answers and images. The answers will be an array within this array.
    const questionArray = [
        {
            question: "The Volusia County Fair is near what city?",
            answers: { a: 'Daytona', b: 'Deltona', c: 'DeLand', d: 'Sanford' },
            correctAnswer: "c",
            image: "assets/images/fairSm1.jpg"
        },
        {
            question: "What would see in the small animal pavilion?",
            answers: { a: 'guinea pigs', b: 'rabbits', c: 'roosters', d: 'all of the above' },
            correctAnswer: "d",
            image: "assets/images/cages.jpg"
        },

        {
            question: "Which is not an event at VCF?",
            answers: { a: 'Goat Costume Show', b: 'Steer Dancing', c: 'Poultry Fashion Show', d: 'Goat Meat Show' },
            correctAnswer: "b",
            image: "assets/images/steerSm.jpg"
        },

        {
            question: "What does the fair smell like?",
            answers: { a: 'fried food', b: 'hay', c: 'manure', d: 'all of the above' },
            correctAnswer: "d",
            image: "assets/images/fairfood1.jpg"
        },

        {
            question: "What is in the VCF parade?",
            answers: { a: 'antique tractors ', b: 'goats', c: 'steers', d: 'pigs' },
            correctAnswer: "a",
            image: "assets/images/parade.jpg"
        }
    ]


    //variable for storing value of user's answer choice
    var currentUserChoice = ""

    var correctAnswers = 0;
    var wrongAnswers = 0;

    // Variable showImage will hold the setInterval when we start the quiz
    var showImage;

    // Count will keep track of the index of the currently displaying question.
    var count = 0;

    // TODO: Use jQuery to run "startQuiz" when we click the "start" button.
    $("#start").click(startQuiz);


    var answer

    var userChoice
    var userAnswers = []
    


    function nextImage() {
        //  TODO: Increment the count by 1.
        count++;

        // TODO: Use a setTimeout to run displayQA after 1/10 second.
        setTimeout(displayQA, 100);
        // TODO: If the count is the same as the length of the image array, reset the count to 0.
        if (count === images.length) {
            count = 0;
        }
    }

    function checkItem() {
        userAnswers.push(userChoice);
        if (userChoice === questionArray[i].correctAnswer) {
            //tell them they got it right
            $("#right-or-wrong").html("<h3>Correct!</h3>")
            //Add to correctAnswers
            correctAnswers++
            $("#correct-answers").text(correctAnswers)
        }
        else {
            //tell them they got it wrong
            $("#right-or-wrong").html("<h3>Wrong!</h3>")
            //Add to wrongAnswers
            wrongAnswers++
            $("#wrong-answers").text(wrongAnswers)
        }

        //add current image
        $("#current-image").html("<img src= " + questionArray[count].image + ">")
        //next question
        nextImage();
        //add to score

    }

//Shows current question and answers.
function displayQA() {
        $("#image-holder").html("<h3>" + questionArray[count].question + "</h3>" +
            "<form>" + "<input type='radio' name='answer' id='current-answer-a'  value='a'>" + questionArray[count].answers.a + "<br>" +
            "<input type='radio' name='answer' id='current-answer-b'  value='b'>" + questionArray[count].answers.b + "<br>" +
            "<input type='radio' name='answer' id='current-answer-c'  value='c'>" + questionArray[count].answers.c + "<br>" +
            "<input type='radio' name='answer' id='current-answer-d'  value='d'>" + questionArray[count].answers.d + "<br>"
            "<button id='submit-button'>Submit Answer</button>" +
            "</form>" + "<span id='current-image'>" + "</span>")
        //event listener - record user's choice
        /* $("#current-answer-a").on("click", function () {
             var userChoice = "a"
             $("#user-choice").text(userChoice)
             console.log(userChoice)
             //store choice to array
             userAnswers.push(userChoice)
             console.log("Testing to see if array shows up", userAnswers)
             //add current image
             $("#current-image").html("<img src= " + questionArray[count].image + ">")
             //next question
             nextImage();
         })*/
        $("#current-answer-a").on("click", function () {
            var userChoice = "a"
            $("#user-choice").text(userChoice)
            console.log(userChoice)
        })
        $("#current-answer-b").on("click", function () {
            var userChoice = "b"
            $("#user-choice").text(userChoice)
            console.log(userChoice)
        })
        $("#current-answer-c").on("click", function () {
            var userChoice = "c"
            $("#user-choice").text(userChoice)
            console.log(userChoice)
        })
        $("#current-answer-d").on("click", function () {
            var userChoice = "d"
            $("#user-choice").text(userChoice)
            console.log(userChoice)
        })
        $("#submitAnswer").on("click", function () {
            var currentUserAnswer = userChoice;
            console.log(userAnswers)
            //userAnswers.push(currentUserAnswer)
            console.log(userAnswers)
        }

        )
        //userAnswers.push(userChoice)
        console.log("LMNOPQRST")
        console.log(userAnswers[0])
        console.log(userAnswers)
        console.log("testing123")

        $("#submit-button").click(checkItem)
        console.log(userChoice)

    }



function startQuiz() {

        // TODO: Use showImage to hold the setInterval to run nextImage.
        showImage = setInterval(nextImage, 15000);
        $("#start").html(" ")

    }

function stopQuiz() {

        // TODO: Put our clearInterval here:
        clearInterval(showImage);

    }



// This will run the display image function as soon as the page loads.
displayQA();
});