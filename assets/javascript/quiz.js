$( document ).ready(function() {
//  Slideshow Activity
//  ** SOLUTION **


 
//Array of objects that include questions, answers and images. The answers will be an array within this array.
const questionArray = [
  {
      question: "The Volusia County Fair is near what city?",
      answers: { a: 'Daytona', b: 'Deltona', c: 'DeLand', d: 'Sanford' },
      correctAnswer: "c",
      image: "assets/images/placeholder.jpg"
  },
  {
      question: "What would see in the small animal pavilion?",
      answers: { a: 'guinea pigs', b: 'rabbits', c: 'roosters', d: 'all of the above' },
      correctAnswer: "d",
      image: "assets/images/poultryRabbits.jpg"
  },

  {
      question: "Which is not an event at VCF?",
      answers: { a: 'Goat Costume Show', b: 'Steer Dancing', c: 'Poultry Fashion Show', d: 'Goat Meat Show' },
      correctAnswer: "b",
      image: "assets/images/cow.gif"
  },

  {
      question: "What does the fair smell like?",
      answers: { a: 'fried food', b: 'hay', c: 'manure', d: 'all of the above' },
      correctAnswer: "d",
      image: "assets/images/ferrisOninon.jpg"
  },

  {
      question: "What is in the VCF parade?",
      answers: { a: 'antique tractors ', b: 'goats', c: 'steers', d: 'pigs' },
      correctAnswer: "a",
      image: "assets/images/tractor.jpg"
  }
]


//variable for storing value of user's answer choice
var currentUserChoice = ""


// Variable showImage will hold the setInterval when we start the quiz
var showImage;

// Count will keep track of the index of the currently displaying question.
var count = 0;

// TODO: Use jQuery to run "startQuiz" when we click the "start" button.
$("#start").click(startQuiz);

// TODO: Use jQuery to run "stopQuiz" when we click the "stop" button.
$("#stop").click(stopQuiz);
var answer
var userChoice
var userAnswers = []
console.log("abcde" + userAnswers)
/*function recordChoice(answer)  {
  $("#result") = answer;
}*/
// This function will replace display whatever image it's given
// in the 'src' attribute of the img tag.
function displayQA() {
  $("#image-holder").html("<h1>" + questionArray[count].question + "</h1>" + 
  "<form>" + "<input type='radio' name='answer' id='current-answer-a'  value='a'>" + questionArray[count].answers.a + "<br>" + 
  "<input type='radio' name='answer' id='current-answer-b'  value='b'>" + questionArray[count].answers.b + "<br>" + 
  "<input type='radio' name='answer' id='current-answer-c'  value='c'>" + questionArray[count].answers.c + "<br>" + 
  "<input type='radio' name='answer' id='current-answer-d'  value='d'>" + questionArray[count].answers.d +  
  "</form>")
  //event listener - record user's choice
  $("#current-answer-a").on("click", function(){
    var userChoice = "a"
    $("#user-choice").text(userChoice)
    console.log(userChoice)

  })
  $("#current-answer-b").on("click", function(){
    var userChoice = "b"
    $("#user-choice").text(userChoice)
    console.log(userChoice)
  })
  $("#current-answer-c").on("click", function(){
    var userChoice = "c"
    $("#user-choice").text(userChoice)
    console.log(userChoice)
  })
  $("#current-answer-d").on("click", function(){
    var userChoice = "d"
    $("#user-choice").text(userChoice)
    console.log(userChoice)
  })
  $("#submitAnswer").on("click", function(){
    var currentUserAnswer = userChoice;
    console.log(userAnswers)
userAnswers.push(currentUserAnswer)
console.log(userAnswers)
  }

)
userAnswers.push(userChoice)
console.log("LMNOPQRST")
console.log(userAnswers[0])
console.log(userAnswers)
console.log("testing123")



 }


function nextImage() {
  //  TODO: Increment the count by 1.
  count++;

  // TODO: Show the loading gif in the "image-holder" div.
  $("#image-holder").html("<img src='images/loading.gif' width='200px'/>");

  // TODO: Use a setTimeout to run displayQA after 1 second.
  setTimeout(displayQA, 1000);

  // TODO: If the count is the same as the length of the image array, reset the count to 0.
  if (count === images.length) {
    count = 0;
  }
}

function startQuiz() {

  // TODO: Use showImage to hold the setInterval to run nextImage.
  showImage = setInterval(nextImage, 15000);

}

function stopQuiz() {

  // TODO: Put our clearInterval here:
  clearInterval(showImage);

}



// This will run the display image function as soon as the page loads.
displayQA();
});