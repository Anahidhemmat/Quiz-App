const quizData = [
  {
    question: "What is the most used programming language?",
    a: "Java",
    b: "C",
    c: "C++",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does css stand for?",
    a: "Central style sheets",
    b: "Cascading style sheets",
    c: "Cascading simple sheets",
    d: "Care SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What dose the HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Application Programming Interface",
    correct: "a",
  },
  {
    question: "What year was JavaScript lunched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "Javacript",
    correct: "d ",
  },
];

//selectors

const quiz = document.querySelector("#quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.querySelector("#question");
const aLabel = document.querySelector("#a-label");
const bLabel = document.querySelector("#b-label");
const cLabel = document.querySelector("#c-label");
const dLabel = document.querySelector("#d-label");
const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

//After submmition

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;

  aLabel.innerText = currentQuizData.a;
  bLabel.innerText = currentQuizData.b;
  cLabel.innerText = currentQuizData.c;
  dLabel.innerText = currentQuizData.d;
}

//deselectAnswers function

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

//getselected

function getselected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

//submit event listener

submitBtn.addEventListener("click", function () {
  const answer = getselected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerText = `You answered correctly at ${score}/${quizData.length} questions.`;
      quiz.style.fontSize = "1.5rem";
      quiz.style.textAlign = "center";
      const reloadBtn = document.createElement("button");
      quiz.append(reloadBtn);
      reloadBtn.innerText = "Reload";
      reloadBtn.addEventListener("click", () => {
        location.reload();
      });
    }
  }
});
