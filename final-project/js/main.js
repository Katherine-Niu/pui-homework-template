const questions = [
    {
      question: "Which element represents your personality?",
      possibleAnswers: [{text: "water", imageFile: "water.jpeg" }, {text: "earth", imageFile: "earth2.jpeg"}, {text: "fire", imageFile: "fire.jpeg"}, {text: "air", imageFile: "air.jpeg"}],
    },
    {
      question: "Which of these scenes feels most inviting to you?",
      possibleAnswers: [{text:"A hidden garden in early spring", imageFile:"garden.jpg"}, {text: "A bustling marketplace filled with spices", imageFile: "spices.jpeg"}, {text: "A seaside cliff where waves crash below", imageFile: "seaside.jpg"}, {text: "A mysterious forest with moss-covered trees", imageFile: "forest.jpeg"}],
    },
    {
      question: "If your life had a soundtrack, which genre would it be?",
      possibleAnswers: [{text: "Reggae beats, relaxed and rhythmic", imageFile:"reggae.jpeg"}, {text: "Classic rock anthems, bold and unapologetic", imageFile: "classic-rock.jpg"}, {text: "Smooth jazz, harmonic and sophisticated", imageFile: "jazz.jpeg"}, {text: "Hip-hop records, poetic and expressive", imageFile: "hip-hop.jpg"}],
    },
    {
      question: "How do you want your fragrance to feel?",
      possibleAnswers: [{text: "Gentle and subtle", imageFile: "gentle1.jpeg"}, {text: "Balanced and natural", imageFile: "balanced.jpeg"}, {text: "Rich and bold", imageFile: "bold.jpeg"}, {text: "Strange and fascinating", imageFile: "strange.jpeg"}],
    },
  ];
  
const quizProgress = document.getElementById("progress");
const quizContainer = document.getElementById("container")
const questionContainer = document.getElementById("questionContainer");
const answerContainer = document.getElementById("answerContainer");
const previousBtn = document.getElementById("previousBtn")
const nextBtn = document.getElementById("nextBtn")
const progress = document.getElementById("progress")
const resultsContainer = document.getElementById("results")
let currentQuestionIndex = 0;
  
function handleQuestion(index) {
  
    // topic/question
    questionContainer.innerText = questions[index].question;

    // answers
    answerContainer.innerHTML = "";
    questions[index].possibleAnswers.forEach((answer) => {
      answerContainer.innerHTML += 
      `<button class="quizAnswer">
        <div class="image-frame">
            <img src="../final-project/page-1-images/${answer.imageFile}">
        </div>
        <p>${answer.text}</p>
        <div class="overlay"></div>
      </button>`;
    });
    let answers = document.querySelectorAll(".quizAnswer");
    answers.forEach((answer) => {
      answer.addEventListener("click", (e) => {
        if (currentQuestionIndex === questions.length - 1) {
        endQuiz();
        } else {
        currentQuestionIndex++;
        }
        handleQuestion(currentQuestionIndex);
      });
    });
  };
  
function endQuiz(){
    quizContainer.classList.add('hide')
    resultsContainer.classList.remove('hide');
    resultsContainer.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your result is...</p>
      <button onclick="restartQuiz()">Restart Quiz</button>`;
    
};

function restartQuiz() {
    resultsContainer.classList.add('hide');
    resultsContainer.innerHTML = "";
    quizContainer.classList.remove('hide');
    currentQuestionIndex = 0;
    handleQuestion(currentQuestionIndex);
    console.log("restart");
};

handleQuestion(currentQuestionIndex);