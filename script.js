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



var questions = [{
    question: "this is question 1",
choice1: "this is answer 1",
choice2: "this is answer 2",
choice3: "this is answer 3",
choice4:"this is answer 4",
correct: "this is answer 2",
},
{
    question: "this is question 2",
    choice1: "this is answer 1",
    choice2: "this is answer 2",
    choice3: "this is answer 3",
    choice4:"this is answer 4",
    correct: "this is answer 3",
},
{
    question: "this is question 3",
    choice1: "this is answer 1",
    choice2: "this is answer 2",
    choice3: "this is answer 3",
    choice4:"this is answer 4",
    correct: "this is answer 1",
},


];

var questionIndex = 0;

var timer = 100;

var interval;



function startQuiz(){
   
    questionsContainer.style.display = "block";
    question.textContent = questions[questionIndex].question;
    ans1.textContent = questions[questionIndex].choice1;
    ans2.textContent = questions[questionIndex].choice2;
    ans3.textContent = questions[questionIndex].choice3;
    ans4.textContent = questions[questionIndex].choice4;
 ans1.setAttribute("value", questions[questionIndex].choice1);
 ans2.setAttribute("value", questions[questionIndex].choice2);
 ans3.setAttribute("value", questions[questionIndex].choice3);
 ans4.setAttribute("value", questions[questionIndex].choice4);
}

function setTime(){
interval = setInterval(function(){
    timer--;
time.textContent = timer;
},1000)
}

function checkAnswer(buttonClick){
    if(buttonClick == questions[questionIndex].correct){
        questionIndex++;
        startQuiz()
    }
else{
    questionIndex++;
    startQuiz();
    timer = timer - 10;

}
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