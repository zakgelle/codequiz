var highscoreList = document.getElementById("highscorelist");
var resetHighscores = document.querySelector("#reset");


var highScores = JSON.parse( localStorage.getItem("highscores"))||[];
console.log(highScores);

function displayScore(){



for( var i = 0; i< highScores.length; i++){
    var scoreLi = document.createElement("li");
    scoreLi.textContent = highScores[i].initials + "" + highScores[i].score;
    highscoreList.append(scoreLi);
}
};

displayScore();

resetHighscores.addEventListener("click", function (){
    localStorage.clear("highscores");
    window.location.reload();
    console.log("click");
});