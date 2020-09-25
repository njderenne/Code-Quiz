//define initial global variables
var score = 0;
var questionCount = 1;
var textAreaEl = document.querySelector(".text-area");
var arrayIndex = 0
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
    //set initial screen
    //call showQuestion function on click event
    startButton.addEventListener("click", showQuestion);
};

var showQuestion = function() {

    console.log(arrayIndex);
    //display updated text
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
        console.log("Wrong Answer Go Study!");
    }
    //call resetState to clear question and answer
    //resetState();
    setNextQuestion();
};

/*

var resetState = function() {
    //clear question and answer options
    ////////////////////learn how to clear textContent///////////////////
    console.log("Still need the resetState function");
    //call setNextQuestion
    setNextQuestion();
};

*/

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
    //show score for the quiz
    //open form to enter name with score
    //add to highscore list if it beats current highscore
};

showQuestion();
