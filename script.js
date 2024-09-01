// Array of questions with options and correct answer
const quiz = [
    {
        question: "What is abriviation of JS?",
        options: ["Java script", "Java", "Script Java", "None of these"],
        answer: "0"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "1"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Mars", "Saturn"],
        answer: "1"
    },
    {
        question: "Who is the founder of Pakistan",
        options: ["Allama Iqbal", "Muhammad Ali Jinnah", "Fatima Jinnah", "Liaqat Ali Khan"],
        answer: "1"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Pb", "Fe"],
        answer: "0"
    }
];

var score = 0; 
var quenum = 0; 

function que(quenum){

    var currentQuestion = document.getElementById("que")
currentQuestion.textContent = quiz[quenum].question;

var currentOption = document.getElementById("btn1")
currentOption.textContent = quiz[quenum].options[0];

var currentOption = document.getElementById("btn2")
currentOption.textContent = quiz[quenum].options[1];

var currentOption = document.getElementById("btn3")
currentOption.textContent = quiz[quenum].options[2];

var currentOption = document.getElementById("btn4")
currentOption.textContent = quiz[quenum].options[3];

}

que(quenum);
var score; 

function selectOption(selectedIndex) {
    var correctAnswerIndex = quiz[quenum].answer;
    if (selectedIndex === correctAnswerIndex) {
        score++;
    }
}

var currentscore = document.getElementById("score")
currentscore.textContent = score; 