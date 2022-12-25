const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Cascading Style Sheets",
        b: "Caw Style Sheets",
        c: "Chill Style Ship",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "What does HTML stand for?",
        a: "Hyper Markup Language",
        b: "Hawa Marka Language",
        c: "Hypertext Markup Language",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1991",
        b: "1995",
        c: "1990",
        d: "1945",
        correct: "b",
    }
];

const quiz = document.getElementById('quiz')
const answerE1s = document.querySelectorAll('.answer')
const questionE1 = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionE1.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function deselectAnswers() {
    answerE1s.forEach(answerE1s => answerE1s.chcked = false)
}

function getSelected() {
    let answerE1s
    answerE1s.forEach(answerE1 => {
        if (answerE1.chcked) {
            answer = answerE1.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].current) {
            score++
        }
        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>Your score ${score}/${quizData.length}</h2>

                <button onClick="location.reloas()>Reload</button>
            `
        }
    }
})