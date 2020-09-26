//define initial global variables
var score = 0;
var questionCount = 1;
var textAreaEl = document.querySelector(".text-area");
var countDownEl = document.querySelector(".timer");
var startTextEl = document.querySelector(".start-text");
var startBtn = document.querySelector(".start-btn");
var highscoreEl = document.querySelector(".highscore");
var questionCountEl = document.querySelector(".question-count");
var timerEl = document.querySelector(".timer");
var endTextEl = document.querySelector(".end-text");
var submitButtonEl = document.querySelector(".submit-btn");
var arrayIndex = 0;
var maxTimer = 75;
var quizTime = 0;
var questionArray = [
    {
        q: "What is the difference between 'var' and 'const'?",
        a: "'Var' is reassignable but 'const' is not",
        a1: "'Const' is reassignalbe but 'var' is not",
        a2: "'Var' is reassignable but 'const' is not",
        a3: "'Var' is for inside functions where 'const' is global",
        a4: "There is no difference between them"
    },
    {
        q: "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
        a: "push()",
        a1: "put()",
        a2: "last()",
        a3: "push()",
        a4: "None of the above"
    },
    {
        q: "Which of the following function of Array object removes the first element from an array and returns that element?",
        a: "shift()",
        a1: "shift()",
        a2: "reverse()",
        a3: "slice()",
        a4: "some()"
    },
    {
        q: "What is the HTML tag under which one can write the JavaScript code?",
        a: "<script>",
        a1: "<js>",
        a2: "<script>",
        a3: "<scripted>",
        a4: "<javascript>"
    },
    {
        q: "Which of the following is the correct syntax to display 'Alert Box' in an alert box using JavaScript?",
        a: "alert('Alert Box')",
        a1: "alertbox('Alert Box')",
        a2: "msgbox('Alert Box')",
        a3: "msg('Alert Box')",
        a4: "alert('Alert Box')"
    },
    {
        q: "Arrays in JavaScript can be used to store ____.",
        a: "all of the above",
        a1: "numbers and strings",
        a2: "other arrays",
        a3: "booleans",
        a4: "all of the above"
    },
    {
        q: "The condition in an if/else statement is enclosed with ____.",
        a: "parenthesis",
        a1: "quotes",
        a2: "curly brackets",
        a3: "parenthesis",
        a4: "square brackets"
    },
    {
        q: "String values must be enclosed within ____ when being assigned to variables.",
        a: "quotes",
        a1: "commas",
        a2: "curly brackets",
        a3: "quotes",
        a4: "parenthsis"
    },
    {
        q: "What does the 'this' keyword do in JavaScript?",
        a: "refers to the 'owner' of the method",
        a1: "refers to the 'owner' of the method",
        a2: "refers to adding something to a method",
        a3: "refers to adding a child to an element",
        a4: "none of the above"
    },
    {
        q: "What is the correct syntax for referring to an external script called script.js?",
        a: "<script src='script.js'>",
        a1: "script href='script.js'>",
        a2: "script id='script.js'>",
        a3: "script name='script.js'>",
        a4: "<script src='script.js'>"
    }
];

var startGame = function() {
    textAreaEl.classList.add("hidden");
    //highscoreEl.classList.add("hidden");
    questionCountEl.classList.add("hidden");
    timerEl.classList.add("hidden");
    endTextEl.classList.add("hidden");


    //startTextEl.textContent = "This is the start of the quiz";
    //startTextEl.classList.add("hidden");
    startBtn.addEventListener("click", setUpQuiz);
    //setUpQuiz();
    //set initial screen
    //call showQuestion function on click event
    //startButton.addEventListener("click", setUpQuiz);
};

var startTimer = function() {
    currentTime = maxTimer - quizTime;
    quizTime++;
    if (currentTime >= 0){
        countDownEl.textContent = currentTime;
    } if (currentTime < 0) {
        endQuiz();
    }
};

var setUpQuiz = function() {
    timer = setInterval(startTimer,1000);
    startTextEl.classList.add("hidden");
    textAreaEl.classList.remove("hidden");
    //highscoreEl.classList.remove("hidden");
    //questionCountEl.classList.remove("hidden");
    timerEl.classList.remove("hidden");
    console.log("this sets up the page");
    showQuestion();
};
 

var showQuestion = function() {
    //display updated text
    //questionCountEl.textContent = `${questionCount} / ${questionArray.length}`;
    document.querySelector(".question-text").textContent = questionArray[arrayIndex].q;
    document.querySelector(".btn-1").textContent = questionArray[arrayIndex].a1;
    document.querySelector(".btn-2").textContent = questionArray[arrayIndex].a2;
    document.querySelector(".btn-3").textContent = questionArray[arrayIndex].a3;
    document.querySelector(".btn-4").textContent = questionArray[arrayIndex].a4;

    //add event listener on click event to call answerSelect
    textAreaEl.addEventListener("click", answerSelect);
};

var answerSelect = function(event) {
    var targetEl = event.target;

    //compare answer choice vs actual answer
    if (targetEl.textContent === questionArray[arrayIndex].a) {
        //if correct add 10 points to score
        score += 10;
        console.log("Correct Answer!");
    }
    else if (targetEl.textContent != questionArray[arrayIndex].a) {
        //if incorrect subtract 10 seconds off timer
        maxTimer -= 15;
        console.log("Wrong Answer Go Study!");
    }
    setNextQuestion();
};

var setNextQuestion = function() {
    //if indexarray = indexarray-1
    if (arrayIndex === (questionArray.length-1)) {
        //call endQuiz
        endQuiz();
    } else {
        //add one to the indexarray
        arrayIndex += 1;
        //call showQuestion
        showQuestion();
    }
};

var endQuiz = function() {
    console.log("This is the end of the game the functions worked");
    console.log(`Your score is ${score}.`)
    textAreaEl.classList.add("hidden");
    highscoreEl.classList.add("hidden");
    questionCountEl.classList.add("hidden");
    timerEl.classList.add("hidden");
    clearInterval(timer);
    endTextEl.classList.remove("hidden");
    highscoreEl.classList.remove("hidden");
    document.querySelector(".final-score").textContent = `You got a score of ${score}!`;

    //show score for the quiz
    //open form to enter name with score
    //add to highscore list if it beats current highscore
    submitButtonEl.addEventListener("click", saveScore);
};

var saveScore = function() {
    endScore = localStorage.setItem("endScore", JSON.stringify(score));
    console.log("Score saved");
    quizSummary();
};

var quizSummary = function() {
    console.log("Summary Page Loads");
};

var loadHighScore = function() {
    highScore = localStorage.getItem("endScore", score);
    highScore = JSON.parse(highScore);
    console.log(highScore);
};


//this actually runs the quiz
startGame();
console.log("end of the function");
highscoreEl.addEventListener("click", loadHighScore);

