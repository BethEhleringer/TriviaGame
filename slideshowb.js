
//  Slideshow Activity
//  ** SOLUTION **

// TODO: Put links to our images in this image array.
var images = ["blue", "red", "yellow"];
 
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

//variable for storing value of user's answer choice
var currentUserChoice = ""


// Variable showImage will hold the setInterval when we start the quiz
var showImage;

// Count will keep track of the index of the currently displaying question.
var count = 0;

// TODO: Use jQuery to run "startSlideshow" when we click the "start" button.
$("#start").click(startSlideshow);

// TODO: Use jQuery to run "stopSlideshow" when we click the "stop" button.
$("#stop").click(stopSlideshow);
var answer
/*function recordChoice(answer)  {
  $("#result") = answer;
}*/
// This function will replace display whatever image it's given
// in the 'src' attribute of the img tag.
function displayImage() {
  $("#image-holder").html("<h1>" + questionArray[count].question + "</h1>" + "<h2>" + questionArray[count].answers.a + "</h2>" +
  "<form>" + "<input type='radio' name='answer' id='current-answer-a' onclick='recordChoice(this.value)' value='a'>" + questionArray[count].answers.a + "<br>" + 
  "<input type='radio' name='answer' id='current-answer-b' onclick='recordChoice(this.value)' value='b'>" + questionArray[count].answers.b + "<br>" + 
  "<input type='radio' name='answer' id='current-answer-c' onclick='recordChoice(this.value)' value='c'>" + questionArray[count].answers.c + "<br>" + 
  "<input type='radio' name='answer' id='current-answer-d' onclick='recordChoice(this.value)' value='d'>" + questionArray[count].answers.d +  
  "</form>")
  //event listener - record user's choice
  $("#current-answer-a").on("click", function(){
    var userChoice = "a"
    $("#user-choice").val(userChoice)
    console.log(userChoice)
  })



  //$("#question-holder").html("<form>" + 
  //"<input type='radio' name='answer' id='current-answer-a' value='a'><br>" + "</form>")
  /*$("#current-answer-a").text(questionArray[count].answers.a)
  console.log(questionArray[count].answers.a)*/
  
//  recordChoice()
}

//Create variable to hold selected answer




function nextImage() {
  //  TODO: Increment the count by 1.
  count++;

  // TODO: Show the loading gif in the "image-holder" div.
  $("#image-holder").html("<img src='images/loading.gif' width='200px'/>");

  // TODO: Use a setTimeout to run displayImage after 1 second.
  setTimeout(displayImage, 1000);

  // TODO: If the count is the same as the length of the image array, reset the count to 0.
  if (count === images.length) {
    count = 0;
  }
}

function startSlideshow() {

  // TODO: Use showImage to hold the setInterval to run nextImage.
  showImage = setInterval(nextImage, 15000);

}

function stopSlideshow() {

  // TODO: Put our clearInterval here:
  clearInterval(showImage);

}



// This will run the display image function as soon as the page loads.
displayImage();
