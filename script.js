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
var index = 0; 

function que(){
var currentQuestion = document.getElementById("que")
currentQuestion.textContent = quiz[index].question;

var currentOption = document.getElementById("btn1")
currentOption.textContent = quiz[index].options[0];

var currentOption = document.getElementById("btn2")
currentOption.textContent = quiz[index].options[1];

var currentOption = document.getElementById("btn3")
currentOption.textContent = quiz[index].options[2];

var currentOption = document.getElementById("btn4")
currentOption.textContent = quiz[index].options[3];

enableOptionButtons()
resetButtonColors();
}
var score = 0;
var txt = "Quiz completed! Restarting from the first question."; 
var txt1 = document.getElementById("Heading")

function next_que(){

    index++;

if (index >= quiz.length){
    index = 0; 
    score = 0;
        scoreCard.textContent = score; 
    txt1.textContent = txt

}

    que()
}


    que()


    function disableOptionButtons() {
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn3").disabled = true;
        document.getElementById("btn4").disabled = true;

    }
    
    
    function enableOptionButtons() {
        document.getElementById("btn1").disabled = false;
        document.getElementById("btn2").disabled = false;
        document.getElementById("btn3").disabled = false;
        document.getElementById("btn4").disabled = false;
    }

var scoreCard = document.getElementById("score")

function resetButtonColors() {
    document.getElementById("btn1").style.backgroundColor = 'rgb(60, 60, 253)';
    document.getElementById("btn2").style.backgroundColor = 'rgb(60, 60, 253)';
    document.getElementById("btn3").style.backgroundColor = 'rgb(60, 60, 253)';
    document.getElementById("btn4").style.backgroundColor = 'rgb(60, 60, 253)';
}

function score_changer(selectedOption) {
    var correctAnswer = quiz[index].answer;

    if (selectedOption == correctAnswer) {
        document.getElementById("btn" + (parseInt(correctAnswer) + 1)).style.backgroundColor = 'green';
        score++;
    } else {
        document.getElementById("btn" + (selectedOption + 1)).style.backgroundColor = 'red';
        document.getElementById("btn" + (parseInt(correctAnswer) + 1)).style.backgroundColor = 'green';
    }

    scoreCard.textContent = score;
    disableOptionButtons();
}
