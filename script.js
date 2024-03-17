const questions = [
  {
    question: "question goes here",
    answers: [
      { text: "answer1", correct: true },
      { text: "answer1", correct: false },
      { text: "answer1", correct: false },
      { text: "answer1", correct: false },
    ]
  },
  {
    question: "question goes here",
    answers: [
      { text: "answer1", correct: false },
      { text: "answer1", correct: false },
      { text: "answer1", correct: false },
      { text: "answer1", correct: true },
    ]
  },
  {
    question: "question goes here",
    answers: [
      { text: "answer1", correct: false },
      { text: "answer1", correct: true },
      { text: "answer1", correct: false },
      { text: "answer1", correct: false },
    ]
  },
  {
    question: "question goes here",
    answers: [
      { text: "answer1", correct: false },
      { text: "answer1", correct: true },
      { text: "answer1", correct: false },
      { text: "answer1", correct: false },
    ]
  }
];

const questionEliment = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    resetState();
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionEliment.innerHTML = questionNumber + "." + currentQuestion.question

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedAns = e.target;
    const isCorrect = selectedAns.dataset.correct === "true";
    if(isCorrect){
        selectedAns.classList.add("correct");
        score ++;
    }else{
        selectedAns.classList.add("false");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
           button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionEliment.innerHTML = 'you scored ${score} out of ${questions.length}';
    nextButton.innerHTML = "Play Again!";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex ++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz()


