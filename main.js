const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "Hyper Text Markup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a: "Hypertext Transfer Product",
        b: "Hypertext Test Protocol",
        c: "Hey Transfer Protocol",
        d: "Hypertext Transfer Protocol",
        ans: "ans4"
    },
    {
        question: "Q4: What is the full form of JS?",
        a: "JavaScript",
        b: "JavaSuper",
        c: "JustScript",
        d: "JordenScript",
        ans: "ans1"
    },
]

let questionCount = 0
let score = 0

let question = document.querySelector('.question')
let option1 = document.querySelector('#option1')
let option2 = document.querySelector('#option2')
let option3 = document.querySelector('#option3')
let option4 = document.querySelector('#option4')
let answers = document.querySelectorAll('.answer')
let submit = document.querySelector('button')
let scoreboard = document.querySelector('#scoreboard')


const loadQuestion = () => {
    let questionList = quizDB[questionCount]
    question.innerHTML = questionList.question
    option1.innerHTML = questionList.a
    option2.innerHTML = questionList.b
    option3.innerHTML = questionList.c
    option4.innerHTML = questionList.d
}

const getCheckAnswer = () => {
    let answer
    answers.forEach(ans => {
        if(ans.checked){
            answer = ans.id
        }
    })

    return answer
}

submit.addEventListener('click', () => {
    let checkedAnswer = getCheckAnswer()
    if (checkedAnswer === quizDB[questionCount].ans) {
        score++
    }
    questionCount++
    if (questionCount < quizDB.length) {
        loadQuestion()
    }

    else {
        scoreboard.innerHTML = `
        <h3>You Scored ${score}/${quizDB.length} </h3>
        <button onclick='location.reload()'>Back</button>
        `
        scoreboard.classList.remove('scoreboard')
    }
})

loadQuestion()