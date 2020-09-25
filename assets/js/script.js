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
        q: "What is the dif between 'var' and 'const'?",
        a: "'Var' s reassignable but 'const' is not",
        a1: "'Const' is reassignalbe but 'var' is not",
        a2: "'Var' s reassignable but 'const' is not",
        a3: "'Var' i for inside functions where 'const' is global",
        a4: "There isn't difference between them"
    },
    {
        q: "What is the difference between 'var' and 'const'?",
        a: "'Var' is reassignable but 'const' is not",
        a1: "'Const' is reassignalbe but 'var' is not",
        a2: "'Var' is reassignable but 'const' is not",
        a3: "'Var' is for inside functions where 'const' is global",
        a4: "There is no difference between them"
    },
    {
        q: "What is the dif between 'var' and 'const'?",
        a: "'Var' s reassignable but 'const' is not",
        a1: "'Const' is reassignalbe but 'var' is not",
        a2: "'Var' s reassignable but 'const' is not",
        a3: "'Var' i for inside functions where 'const' is global",
        a4: "There isn't difference between them"
    },
    {
        q: "What is the difference between 'var' and 'const'?",
        a: "'Var' is reassignable but 'const' is not",
        a1: "'Const' is reassignalbe but 'var' is not",
        a2: "'Var' is reassignable but 'const' is not",
        a3: "'Var' is for inside functions where 'const' is global",
        a4: "There is no difference between them"
    },
    {
        q: "What is the dif between 'var' and 'const'?",
        a: "'Var' s reassignable but 'const' is not",
        a1: "'Const' is reassignalbe but 'var' is not",
        a2: "'Var' s reassignable but 'const' is not",
        a3: "'Var' i for inside functions where 'const' is global",
        a4: "There isn't difference between them"
    },
    {
        q: "What is the difference between 'var' and 'const'?",
        a: "'Var' is reassignable but 'const' is not",
        a1: "'Const' is reassignalbe but 'var' is not",
        a2: "'Var' is reassignable but 'const' is not",
        a3: "'Var' is for inside functions where 'const' is global",
        a4: "There is no difference between them"
    },
    {
        q: "What is the dif between 'var' and 'const'?",
        a: "'Var' s reassignable but 'const' is not",
        a1: "'Const' is reassignalbe but 'var' is not",
        a2: "'Var' s reassignable but 'const' is not",
        a3: "'Var' i for inside functions where 'const' is global",
        a4: "There isn't difference between them"
    },
    {
        q: "What is the difference between 'var' and 'const'?",
        a: "'Var' is reassignable but 'const' is not",
        a1: "'Const' is reassignalbe but 'var' is not",
        a2: "'Var' is reassignable but 'const' is not",
        a3: "'Var' is for inside functions where 'const' is global",
        a4: "There is no difference between them"
    },
    {
        q: "What is the dif between 'var' and 'const'?",
        a: "'Var' s reassignable but 'const' is not",
        a1: "'Const' is reassignalbe but 'var' is not",
        a2: "'Var' s reassignable but 'const' is not",
        a3: "'Var' i for inside functions where 'const' is global",
        a4: "There isn't difference between them"
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
    //show score for the quiz
    //open form to enter name with score
    //add to highscore list if it beats current highscore
};

showQuestion();















//////////////////////////////////////////////////////////////////////////////


/*


var startQuiz = function(){
    //when start button selected remove button, start timer, show question

    //call showQuestion();

};

var setNextQuestion = function() {
    //increase array search by 1
    arrayIndex +=1;
    console.log(arrayIndex);

};

var showQuestion = function() {
    resetState();
    //remove old question and answers



    //adds question and answers to the page
    var question = document.querySelector(".question-text");
        
    var newQuestion = document.createTextNode(questionArray[0].q);
    
    question.appendChild(newQuestion);
    
    var answerOne = document.querySelector(".btn-1");
    var answerTwo = document.querySelector(".btn-2");
    var answerThree = document.querySelector(".btn-3");
    var answerFour = document.querySelector(".btn-4");

    var newAnswerOne = document.createTextNode(questionArray[arrayIndex].a1);
    var newAnswerTwo = document.createTextNode(questionArray[arrayIndex].a2);
    var newAnswerThree = document.createTextNode(questionArray[arrayIndex].a3);
    var newAnswerFour = document.createTextNode(questionArray[arrayIndex].a4);

    answerOne.appendChild(newAnswerOne);
    answerTwo.appendChild(newAnswerTwo);
    answerThree.appendChild(newAnswerThree);
    answerFour.appendChild(newAnswerFour);

    

    //set up the next index for the question
    setNextQuestion();

    textAreaEl.addEventListener("click", showQuestion);

    //answerOne.removeChild(newAnswerOne);

};

var resetState = function() {

};

//if(!answer)

//if(answer)

showQuestion();

var selectAnswer = function(event) {
    var targetEl = event.target;
    if (targetEl.textContent === questionArray[0].a) {
        score += 10;
        console.log("Correct Answer!");

        //clear question??
    } else {
        console.log("Wrong Answer Go Study!");
    }
    //call showQuestion();

    //if end of question array call endQuiz();
};

textAreaEl.addEventListener("click", selectAnswer);

var endQuiz = function() {

};


*/