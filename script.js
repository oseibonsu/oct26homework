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
      document.getElementById("startQuiz").style.visibility = "hidden";
     
    }, 1000);

}

function addQues() {
    var butt = document.createElement("button");
    butt.innerText = "shitShow";
    document.getElementById("gameArea").appendChild(butt);
}


    startQuiz.addEventListener("click", startTimer);