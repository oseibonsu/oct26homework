var timer = 0;
var score = 0;
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
    document.getElementById("startQuiz").style.visibility = "hidden";
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
        var h1 = document.createElement("h1");
        h1.textContent = choice;
        document.getElementById("answers").appendChild(h1);
    }
}

document.addEventListener('click', function(event){
    if(event.target.matches("#answers h1")){
        
        if(event.target.innerText == questions[0].answer){
            alert('correct')
        }else{
            alert('incorrect');
        }
        indexOfCurrentQuestion++;
        document.getElementById("gameArea").innerHTML = "";
        addQ()
    }
});

// currentQuestion.choices.forEach(function(choices) {
//     choiceNode = document.createElement("button");
//     choiceNode.setAttribute("class", choice)

// var currentQuestion = questions[currentQuestionIndex];
// var ques = document.createElement("h1");
// ques.setAttribute("id", "question");
// document.getElementById("gameArea").appendChild(ques);
// var answ = document.createElement("button");
// answ.setAttribute("id", "choice")
// document.getElementById("gameArea").appendChild(answ);
// var answ = document.createElement("button");
// document.getElementById("gameArea").appendChild(answ);
// var answ = document.createElement("button");
// document.getElementById("gameArea").appendChild(answ);
// var answ = document.createElement("button");
// document.getElementById("gameArea").appendChild(answ);


startQuiz.addEventListener("click", startTimer);