var timer = 0;
var score = 0;
var startQuiz = document.getElementById("startQuiz");
var timerDisplay = document.querySelector("#timerDisplay");
var currentQuestion = questions[0];


function startTimer() {
    timer = 200;
    interval = setInterval(function(){
      timer--;
      console.log(timer);
      timerDisplay.textContent = timer;
    }, 1000);
    document.getElementById("startQuiz").style.visibility = "hidden";
    addQ();

}

function addQ() {
    var currentQuestion = questions[currentQuestionIndex];
    var ques = document.createElement("h1");
    ques.setAttribute("id", "question");
    document.getElementById("gameArea").appendChild(ques);
    var answ = document.createElement("button");
    answ.setAttribute("id", "choice")
    document.getElementById("gameArea").appendChild(answ);
    // var answ = document.createElement("button");
    // document.getElementById("gameArea").appendChild(answ);
    // var answ = document.createElement("button");
    // document.getElementById("gameArea").appendChild(answ);
    // var answ = document.createElement("button");
    // document.getElementById("gameArea").appendChild(answ);
}

    startQuiz.addEventListener("click", startTimer);