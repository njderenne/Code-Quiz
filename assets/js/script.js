
var score = 0;
var questionCount = 1;
var textAreaEl = document.querySelector(".text-area");
var arrayIndex = 0
console.log(arrayIndex);
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
    }
];

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







// var questionArray = [
//     {
//         q: "What is the difference between 'var' and 'const'?",
//         a: "'Var' is reassignable but 'const' is not",
//         a1: "'Const' is reassignalbe but 'var' is not",
//         a2: "'Var' is reassignable but 'const' is not",
//         a3: "'Var' is for inside functions where 'const' is global",
//         a4: "There is no difference between them"
//     },
//     {
//         q: "What is the dif between 'var' and 'const'?",
//         a: "'Var' s reassignable but 'const' is not",
//         a1: "'Const' is reassignalbe but 'var' is not",
//         a2: "'Var' s reassignable but 'const' is not",
//         a3: "'Var' i for inside functions where 'const' is global",
//         a4: "There isn't difference between them"
//     }
// ];

// //put into a for loop for all the questions but dont continue until answered and left is left
// var displayQuestion = function(event) {
//         //appends the questions and answer choices to the html
//         var question = document.querySelector(".question-text");
        
//         var newQuestion = document.createTextNode(questionArray[0].q);
        
//         question.appendChild(newQuestion);
        
//         var answerOne = document.querySelector(".btn-1");
//         var answerTwo = document.querySelector(".btn-2");
//         var answerThree = document.querySelector(".btn-3");
//         var answerFour = document.querySelector(".btn-4");
        
//         var newAnswerOne = document.createTextNode(questionArray[0].a1);
//         var newAnswerTwo = document.createTextNode(questionArray[0].a2);
//         var newAnswerThree = document.createTextNode(questionArray[0].a3);
//         var newAnswerFour = document.createTextNode(questionArray[0].a4);
        
//         answerOne.appendChild(newAnswerOne);
//         answerTwo.appendChild(newAnswerTwo);
//         answerThree.appendChild(newAnswerThree);
//         answerFour.appendChild(newAnswerFour);
// };

// var aOneButtonHandler = function(event) {
//     var targetEl = event.target;
//     if (targetEl.textContent === questionArray[0].a) {
//         score += 10;
//         console.log("Correct Answer!");

//     } else {
//         console.log("Wrong Answer Go Study!");
//     }
// };

// textAreaEl.addEventListener("click", aOneButtonHandler);

