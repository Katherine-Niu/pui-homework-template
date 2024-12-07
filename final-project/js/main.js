const questions = [
    {
      question: "Which element represents your personality?",
      possibleAnswers: [{text: "water", imageFile: "water.jpeg", value: "water"}, {text: "earth", imageFile: "earth2.jpeg", value: "earth"}, {text: "fire", imageFile: "fire.jpeg", value: "fire"}, {text: "air", imageFile: "air.jpeg", value: "air"}],
    },
    {
      question: "Which of these scenes feels most inviting to you?",
      possibleAnswers: [{text:"A hidden garden in early spring", imageFile:"garden.jpg", value: "garden"}, {text: "A bustling marketplace filled with spices", imageFile: "spices.jpeg", value: "marketplace"}, {text: "A seaside cliff where waves crash below", imageFile: "seaside.jpg", value: "jungle"}, {text: "A mysterious forest with moss-covered trees", imageFile: "forest.jpeg", value: "forest"}],
    },
    {
      question: "If your life had a soundtrack, which genre would it be?",
      possibleAnswers: [{text: "Reggae beats, relaxed and rhythmic", imageFile:"reggae.jpeg", value: "reggae"}, {text: "Classic rock anthems, bold and unapologetic", imageFile: "classic-rock.jpg", value: "rock"}, {text: "Smooth jazz, harmonic and sophisticated", imageFile: "jazz.jpeg", value: "jazz"}, {text: "Hip-hop records, poetic and expressive", imageFile: "hip-hop.jpg", value: "pop"}],
    },
    /*{
      question: "How do you want your fragrance to feel?",
      possibleAnswers: [{text: "Gentle and subtle", imageFile: "gentle1.jpeg"}, {text: "Balanced and natural", imageFile: "balanced.jpeg"}, {text: "Rich and bold", imageFile: "bold.jpeg"}, {text: "Strange and fascinating", imageFile: "strange.jpeg"}],
    },*/
  ];

const fragranceNames = [
    {
        name: "fragranceA",
        values: '["water","garden","reggae"]',
    },
    {
        name: "fragranceB",
        values: '["water","garden","rock"]',
    },
    {
        name: "fragranceC",
        values: '["water","garden","jazz"]',
    }
];  

const fragranceDescriptions = 
  {
    "fragranceA": {description: "description of fragranceA", imageFile: "air.jpeg"}, 
    "fragranceB": {description: "description of fragranceB", imageFile: "earth.jpeg"}
  }


const quizProgress = document.getElementById("progress");
const quizContainer = document.getElementById("container")
const questionContainer = document.getElementById("questionContainer");
const answerContainer = document.getElementById("answerContainer");
const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");
const resultsContainer = document.getElementById("results");
let currentQuestionIndex = 0;
let userAnswers = [];
  
function handleQuestion(index) {
  
    // topic/question
    questionContainer.innerText = questions[index].question;

    // answers
    answerContainer.innerHTML = "";
    questions[index].possibleAnswers.forEach((answer) => {
      answerContainer.innerHTML += 
      `<button class="quizAnswer" value=${answer.value}>
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
        if (currentQuestionIndex === questions.length-1) {
        setTimeout(endQuiz, 3000);
        } else {
        currentQuestionIndex++;
        }
        handleQuestion(currentQuestionIndex);
        userAnswers.push(answer.value);
        console.log(userAnswers);
        //calculateResult()
      });
    });
  };

let fragranceResult = "";  
  
function calculateResult() {
    userAnswersString = JSON.stringify(userAnswers)
    console.log(userAnswersString)
    for (let i=0; i<fragranceNames.length; i++) {
        if (fragranceNames[i].values === userAnswersString) {
            fragranceResult = fragranceNames[i].name
            console.log("Fragrance result " + fragranceResult);
            return fragranceResult;

        }
    }

}

let fragranceDescription = "";

function calculateDescription() {
  fragranceDescription = fragranceDescriptions[fragranceResult].description
  return fragranceDescription;
}

/*
function calculateDescription() {
  for (let i=0; i<fragrancesAll.length; i++) {
    if (fragrancesAll[i].values === userAnswersString) {
      fragranceDescription = fragrancesAll[i].description
      console.log("Fragrance description " + fragranceDescription)
      return fragranceDescription;
    }
  }
}
*/

function calculateImageFile() {
  fragranceImageFile = fragranceDescriptions[fragranceResult].imageFile
}

function endQuiz(){
    quizContainer.classList.add('hide')
    resultsContainer.classList.remove('hide');
    
    calculateResult();
    calculateDescription();
    calculateImageFile();
    /*
    const nameElement = document.createElement('p');
    nameElement.textContent = fragranceResult;
    fragranceTextElement.appendChild(nameElement);
    
    
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = "hi";
    */
    resultsContainer.innerHTML = `
    <h2>Quiz Completed!</h2>
    <div class="fragranceResultContent">
      <div class="fragranceText">
        <p>Your result is ${fragranceResult}</p>
        <p>Description is ${fragranceDescription}</p>
      </div>
      <img class="fragranceImage" src="../final-project/page-1-images/${fragranceImageFile}">
    </div>
    <button onclick="restartQuiz()">Restart Quiz</button>`;


    console.log("end quiz " + fragranceResult + " " + fragranceDescription);
    
};

function restartQuiz() {
    resultsContainer.classList.add('hide');
    resultsContainer.innerHTML = "";
    quizContainer.classList.remove('hide');
    userAnswers = [];
    currentQuestionIndex = 0;
    handleQuestion(currentQuestionIndex);
    console.log("restart");
};

handleQuestion(currentQuestionIndex);