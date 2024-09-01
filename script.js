// Array of questions with options and correct answer
const quiz = [
    {
        question: "What is abriviation of JS?",
        options: ["Java script", "Java", "Script Java", "None of these"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Mars", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "Who is the founder of Pakistan",
        options: ["Allama Iqbal", "Muhammad Ali Jinnah", "Fatima Jinnah", "Liaqat Ali Khan"],
        answer: "Harper Lee"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Pb", "Fe"],
        answer: "Au"
    }
];

var score = 0; 

var currentQuestion = document.getElementById("que")
currentQuestion.textContent = quiz[1].question;

var currentOption = document.getElementById("opt-btn")
currentOption.textContent = quiz[1].options;