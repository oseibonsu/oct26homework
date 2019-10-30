var timer = 0;
var score = timer * 100;
var startQuiz = document.getElementById("startQuiz");
var timerDisplay = document.querySelector("#timerDisplay");
var currentQuestion = questions[0];

var indexOfCurrentQuestion = 0;
var interval;

function startTimer() {
    timer = 200;
    interval = setInterval(function() {
        timer--;
        console.log(timer);
        timerDisplay.textContent = timer;
    }, 1000);
    document.getElementById("gameArea").innerHTML = "";
    addQ();

}

function addQ() {
    var currentQuestion = questions;
    console.log('QUESTIONS', questions)
    var ques = document.createElement("h1");
    ques.innerText = questions[indexOfCurrentQuestion].title;
    document.getElementById("gameArea").appendChild(ques);
    ques.setAttribute("id", "question");
    addAns();
}

function addAns() {
    var ans = document.createElement("div");
    ans.setAttribute("id", "answers");
    document.getElementById("gameArea").appendChild(ans);
    for (var i = 0; i < questions[indexOfCurrentQuestion].choices.length; i++) {
        var choice = questions[indexOfCurrentQuestion].choices[i];
        var button = document.createElement("button");
        button.textContent = choice;
        document.getElementById("answers").appendChild(button);
    }
}

document.addEventListener('click', function(event) {
    if (event.target.matches("#answers button")) {

        if (event.target.innerText === questions[indexOfCurrentQuestion].answer) {
            alert('correct')
            indexOfCurrentQuestion++;
        } else {
            alert('incorrect');
            timer--;
            timer--;
            timer--;
            timer--;
            timer--;
            timer--;
            timer--;
            timer--;
            timer--;
            timer--;

        }

        document.getElementById("gameArea").innerHTML = "";

        addQ()
    }
});

startQuiz.addEventListener("click", startTimer);