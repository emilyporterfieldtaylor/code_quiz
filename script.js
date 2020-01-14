var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "What does JSON stand for?",
    choices: ["javascript octopus notation", "jessicasimpson object notation", "javascript object nutella", "javascript object notation"],
    answer: "javascript object notation"
  },
  {
    title: "Which of these is NOT a front-end development language?",
    choices: ["html", "sql", "css", "javascript"],
    answer: "sql"
  },
  {
    title: "Which of these symbols is the css class selector?",
    choices: [".", "!", "<>", "#"],
    answer: "."
  }
];

//Query Selector Block
var titleEl = document.querySelector("#title");
var choice1El = document.querySelector("#choice1");
var choice2El = document.querySelector("#choice2");
var choice3El = document.querySelector("#choice3");
var choice4El = document.querySelector("#choice4");
var commentEl = document.querySelector("#comment");
var timerEl = document.querySelector("#timer");
var quizEl = document.querySelector("#quiz");
var scoreEl = document.querySelector("#highscore");

//Counting Variables
var currentQuestion = 0;
var countdown = 75;

function startTimer (){
  var result = setInterval(function(){
    timerEl.textContent =  "Time: " + countdown--;
    if (countdown <= 0) {
      clearInterval(result);
      //high score page
    }
  }, 1000);

};

function getQuestion() {
  titleEl.textContent = questions[currentQuestion].title;
  choice1El.textContent = questions[currentQuestion].choices[0];
  choice2El.textContent = questions[currentQuestion].choices[1];
  choice3El.textContent = questions[currentQuestion].choices[2];
  choice4El.textContent = questions[currentQuestion].choices[3];
}

document.addEventListener("click", function(event){
  //validate the answer
  if (event.target.matches("button")){
    commentEl.textContent = "";
    commentEl.removeAttribute("class", "hide");

    if (event.target.textContent === questions[currentQuestion].answer) {
      commentEl.textContent = "Correct!";
      currentQuestion++;
      getQuestion();
      setTimeout(function(){ 
        commentEl.setAttribute("class", "hide");
      }, 1000);
    } else {
      countdown = countdown - 15;
      commentEl.textContent = "Wrong!";
      setTimeout(function(){ 
        commentEl.setAttribute("class", "hide");
      }, 1000);
    }
  }

})

// View Score list
function showScore() {
  scoreEl.classList.remove("hide");
  quizEl.setAttribute("class" , "hide");
}

getQuestion();
startTimer();