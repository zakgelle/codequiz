var start = document.getElementById("start");
var questionsContainer = document.getElementById("questions");
var question = document.getElementById("question");
var ans1 = document.getElementById("choice1");
var ans2 = document.getElementById("choice2");
var ans3 = document.getElementById("choice3");
var ans4 = document.getElementById("choice4");
var answerbtn = document.querySelector(".answerbtn");
var startContainer = document.getElementById("start-screen");
var time = document.getElementById("time");
var userInput = document.getElementById("userinput");
var scoreEl = document.getElementById("score");
var submit = document.getElementById("submit");
var userName = document.getElementById("username");
var scoreArr = []
var endscore;



var questions = [{
    question: "Inside which HTML element do we put the JavaScript?",
choice1: "<scripting>",
choice2: "<script>",
choice3: "<javascript>",
choice4:"<js>",
correct: "<script>",
},
{
    question: "Which one these answer is not a javascript data types?",
    choice1: "number",
    choice2: "string",
    choice3: "prompt",
    choice4:"boolean",
    correct: "prompt",
},
{
    question: "In javascript , an array can used to store",
    choice1: "methods",
    choice2: "events",
    choice3: "functions",
    choice4:"none of these",
    correct: "none of these",
},
{
    question: "What is an if and if else statements in javascript",
    choice1: "Quotations",
    choice2: "Integers",
    choice3: "Conditional statements",
    choice4:"Methods",
    correct: "Conditional statements",
},
{
    question: "Objects are variables that can contains many ____ ",
    choice1: "Methods",
    choice2: "Brackets",
    choice3: "Values",
    choice4:"Statements",
    correct: "Values",
},



];

var questionIndex = 0;

var score = 0;

var timer = 100;

var interval;



function startQuiz(){
    if(questionIndex === questions.length){
        endQuiz();
    }
   
    questionsContainer.classList.replace("hide","show");
    question.textContent = questions[questionIndex].question;
    ans1.textContent = questions[questionIndex].choice1;
    ans2.textContent = questions[questionIndex].choice2;
    ans3.textContent = questions[questionIndex].choice3;
    ans4.textContent = questions[questionIndex].choice4;
 ans1.setAttribute("value", questions[questionIndex].choice1);
 ans2.setAttribute("value", questions[questionIndex].choice2);
 ans3.setAttribute("value", questions[questionIndex].choice3);
 ans4.setAttribute("value", questions[questionIndex].choice4);
};

function setTime(){
interval = setInterval(function(){
    timer--;
time.textContent = timer;
if(timer == 0){
    clearInterval(interval);
time.textContent = "Time is up"

};

},1000)
}

function checkAnswer(buttonClick){
    if(buttonClick == questions[questionIndex].correct){
        questionIndex++;
        score++;
        scoreEl.innerHTML = parseInt(score)
        startQuiz()
    }
else{
    questionIndex++;
    startQuiz();
    timer = timer - 10;


}
}
function endQuiz(){
    clearInterval(interval);
    questionsContainer.style.display = "none";
    userInput.style.display = "block";
    endscore = score;

}





start.addEventListener("click", ()=>{
    console.log("click");
    startContainer.style.display = "none";
    startQuiz();
    setTime();
})

answerbtn.addEventListener("click", ()=>{
    var buttonClick = this.event.target.value;
    console.log(buttonClick);
    checkAnswer(buttonClick);
    
})

submit.addEventListener("click", ()=>{
   var initials = userName.value.trim();
   if(initials!== ""){
       scoreArr = JSON.parse(localStorage.getItem("highscores"))|| [];
       var userScore = {
           initials: initials,
           score: endscore,
       }
       scoreArr.push(userScore);
       localStorage.setItem("highscores",JSON.stringify(scoreArr));
   } 
window.location.assign("highscore.html");
} )