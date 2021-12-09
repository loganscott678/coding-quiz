// set a timer by using setInterval() 

// if timer hits 0, end quiz

// subtract points/time for inaccurate responses

// set a variable to keep track of time 

// iterate through each question and have each question replace previous 
// - "if 'this' is clicked, hide() this, show() that"
// - * refer to each section class for each question

// keep score, save to localStorage and pull in to display-scores
// - saveQuiz() function

// if statement for correct answer validation 

var currentQuestionIndex = 0

var quiz = document.getElementById('quiz-section');

var timer = document.getElementById('timer');



var questions = [
    {
        q: 'Placeholder Question'
        , choices: [
            'a. option 1'
            , 'b. option 2'
            , 'c. option 3'
            , 'd. option 4'
        ]
        , answer: 'a. option 1'
    }

    {

    }
]



// function getQuestion() {
//     var currentQ = questions
// }