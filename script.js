var startButton = document.querySelector("#start-game")
var gameStart = document.querySelector("#game-start")
var gameContainer = document.querySelector("#questions")
var questionEl = document.querySelector("#question")
var answerButtons = document.getElementById("#answers")

// need a questions array - I recommend using an array of objects with a question and answers in each object

// iterate over each question and evaluate the users answer when they click an answer button

function startGame() {
    gameStart.style.display = "none"
    gameContainer.style.display = "block"
    currentQuestionIndex = 0
    display()

function display(question) {
    questionEl.innerHTML = questions[currentQuestionIndex].question;
    answerButtons.innerHTML = questions[currentQuestion]
    
       
    }    
}
var questions= 0
let questions = [
    {
        title: "What does CSS stands for?",
        choices: [
            { text: "Cascade Style Sheet", correct: true },
            { text: "Color Style Sheet", correct: false },
            { text: "Create State Safe", correct: false},
            { text: "Cloud Summer Style", correct: false}
        ]
    
    },
    {
        title: "Which of the following is the foundation for web pages?",
        choices: [
            { text: "JavaScript", correct: false },
            { text: "CSS", correct: false},
            { text: "HTML", correct: true},
            { text: "MySQL", correct: false}

        ]
    },
    {
        question: "What does HTML stands for?",
        answers: [
            { text: "Hypertext main language", correct: false },
            { text: "Hypertrial markup language", correct: false},
            { text: "Hypertext markup language", correct: true},
            { text: "Hypertrial markup list", correct: false}

        ]
    },
    {
        question: "Where does the footer go in the html file?",
        answers: [
            { text: "at the top of the page", correct: false},
            { text: "at the bottom of the page", correct: true},
            { text: "in the middle of the page", correct: false},
            { text: "underneath the head tag", correct: false}
        ]
    }
];




   




startButton.addEventListener("click" , startGame)

