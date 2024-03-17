const questions = [
  {
    question: "What is the primary purpose of a CPU ?",
    answers: [
      { text: "A) Storing data", correct: false },
      { text: "B) Executing instructions", correct: true },
      { text: "C) Displaying graphics", correct: false },
      { text: "D) Connecting to the internet", correct: false },
    ]
  },
  {
    question: "Which of the following programming languages is primarily used for building dynamic web applications?",
    answers: [
      { text: "A) C++", correct: false },
      { text: "B) Java", correct: false },
      { text: "C) Python", correct: false },
      { text: "D) JavaScript", correct: true },
    ]
  },
  {
    question: "What is the function of RAM (Random Access Memory) in a computer system?",
    answers: [
      { text: "A) Long-term storage of data", correct: false },
      { text: "B) Running the operating system", correct: false},
      { text: "C) Temporary storage of data and program instructions", correct: true},
      { text: "D) Connecting peripheral devices", correct: false },
    ]
  },
  {
    question: "Which technology is used for wireless communication over short distances between devices like smartphones, laptops, and IoT devices?",
    answers: [
      { text: "A) Ethernet", correct: false },
      { text: "B) Bluetooth", correct: true },
      { text: "C) Fiber optics", correct: false },
      { text: "D) DSL", correct: false },
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
    questionEliment.innerHTML = `You scored ${score} out of ${questions.length}`
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


