var timer = 0;
var score = 0;
var startQuiz = document.getElementById("startQuiz");
var timerDisplay = document.querySelector("#timerDisplay");

function startTimer() {
    timer = 200;
    interval = setInterval(function(){
      timer--;
      console.log(timer);
      timerDisplay.textContent = timer;
    }, 1000);
    document.getElementById("startQuiz").style.visibility = "hidden";
    addQ();
    addA();

}

function addQ() {
    var ques = document.createElement("h1");
    ques.innerText = (questions[0].title);
    document.getElementById("gameArea").appendChild(ques);
} 
function addA() {
    var answ = document.createElement("button");
    answ.innerText = (questions[0].choices[0]);
    document.getElementById("gameArea").appendChild(answ);
}


    startQuiz.addEventListener("click", startTimer);