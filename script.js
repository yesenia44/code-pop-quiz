var startButton = document.querySelector("#start-game")
var gameStart = document.querySelector("#game-start")
var gameContainer = document.querySelector("#questions")
var questionContainer = document.getElementById("#question")
var answerButtons = document.getElementById("#answers")

// need a questions array - I recommend using an array of objects with a question and answers in each object

// iterate over each question and evaluate the users answer when they click an answer button

function startGame() {
    gameStart.style.display = "none"
    gameContainer.style.display = "block"
    displayQuestions()
}

function displayQuestions() {
    questionContainer.innerText = questions
}

var questions = [
    {
        question: "blah blah?",
        answers: [
            { text: "0", correct: true },
            { text: "20", correct: false }
        ]
    
    },
    {
        question: "blah?",
        answers: [
            { text: "0", correct: false },
            { text: "1", correct: false},
            { text: "2", correct: true}

        ]
    },
    {
        question: "blah?",
        answers: [
            { text: "0", correct: false },
            { text: "1", correct: false},
            { text: "2", correct: true}

        ]
    }
]


startButton.addEventListener("click" , startGame)
