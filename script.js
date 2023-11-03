const quizData = [
    {
        question: 'How old is Safni',
        a: '20',
        b: '17',
        c: '18',
        d: '19',
        correct: 'c'
    }, 
    {
        question:'Which country has the largest population in Africa?',
        a : "South Africa",
        b : "Nigeria",
        c: "Ghana",
        d: "Togo",
        correct: 'b'
    }, 
    {
        question:'What does the word “baby” mean?',
        a : "A very young child",
        b :"An adult",
        c:"A small animal",
        d:"None of these answers are true.",
        correct: 'a'
    },
    {
        question: 'What is the best programming language in 2023',
        a: "C++",
        b: "Java",
        c: "Python",
        d: "JavaScript" ,
        correct: 'd'
    }, 
    {
        question:'Who is Justin Bieber, A',
        a: 'Singer',
        b: 'Dancer',
        c: 'Content Creator',
        d: 'None of the above',
        correct: 'a'
    },
]

const quiz = document.querySelector('.quiz')
const answersEls = document.querySelectorAll('.answer')
const questionE = document.querySelector('#question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.querySelector('#submit');

let currentQuiz = 0;
let score = 0;

// loadQuiz
function loadQuiz() {
    deselectAnswers();
    
    const currentQuizData = quizData[currentQuiz];
    
    questionE.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
loadQuiz();
// If selected go to the next question
function getSelected() {
    let answerOne = undefined;

    answersEls.forEach((answerE) => {
        if (answerE.checked) {
            answerOne =  answerE.id;
        }
    });
    return answerOne;
}
// Deselect the answers for the next quiz question
function deselectAnswers() {
    answersEls.forEach((answerE) => {
        answerE.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h3>You're score is <span>${score}</span> out of <span>${quizData.length}</span>! 🎉</h3>
            <button onclick="location.reload()">reload Quiz</button>
            `
        }
    }
});
