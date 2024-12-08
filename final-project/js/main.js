//Creating an array to store the questions and corresponding answers for each question. 
//Each question has 4 answers and each answer contains text, a image file, and a value.

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
  ];

//Creating an array to store fragrance names and the corresponding values. The values represent a unique answer combination. 
const fragranceNames = [
    {
        name: "Dead Air",
        values: '["air","garden","pop"]',
    },
    {
        name: "Dead Air",
        values: '["air","marketplace","jazz"]',
    },
    {
        name: "Dead Air",
        values: '["air","jungle","rock"]',
    },
    {
      name: "Dead Air",
      values: '["air","forest","reggae"]',
    },
    {
      name: "Floating",
      values: '["air","garden","reggae"]',
    },
    {
      name: "Floating",
      values: '["air","marketplace","rock"]',
    },
    {
      name: "Floating",
      values: '["air","jungle","jazz"]',
    },
    {
    name: "Floating",
    values: '["air","forest","pop"]',
    },
    {
      name: "Steamed Rainbow",
      values: '["water","garden","rock"]',
    },
    {
      name: "Steamed Rainbow",
      values: '["water","marketplace","jazz"]',
    },
    {
      name: "Steamed Rainbow",
      values: '["water","jungle","pop"]',
    },
    {
      name: "Steamed Rainbow",
      values: '["water","jungle","reggae"]',
    },
    {
      name: "Tears",
      values: '["water","garden","pop"]',
    },
    {
      name: "Tears",
      values: '["water","marketplace","reggae"]',
    },
    {
      name: "Tears",
      values: '["water","jungle","rock"]',
    },
    {
      name: "Tears",
      values: '["water","forest","jazz"]',
    },
    {
      name: "Fan Your Flames",
      values: '["fire","garden","pop"]',
    },
    {
      name: "Fan Your Flames",
      values: '["fire","marketplace","rock"]',
    },
    {
      name: "Fan Your Flames",
      values: '["fire","jungle","reggae"]',
    },
    {
      name: "Fan Your Flames",
      values: '["fire","forest","jazz"]',
    },
    {
      name: "Flaming Creature",
      values: '["fire","garden","jazz"]',
    },
    {
      name: "Flaming Creature",
      values: '["fire","marketplace","reggae"]',
    },
    {
      name: "Flaming Creature",
      values: '["fire","jungle","rock"]',
    },
    {
      name: "Flaming Creature",
      values: '["fire","forest","pop"]',
    },
    {
      name: "Vetiver Extraordinaire",
      values: '["earth","garden","rock"]',
    },
    {
      name: "Vetiver Extraordinaire",
      values: '["earth","marketplace","reggae"]',
    },
    {
      name: "Vetiver Extraordinaire",
      values: '["earth","jungle","jazz"]',
    },
    {
      name: "Vetiver Extraordinaire",
      values: '["earth","forest","pop"]',
    },
    {
      name: "Copper",
      values: '["earth","garden","reggae"]',
    },
    {
      name: "Copper",
      values: '["earth","marketplace","pop"]',
    },
    {
      name: "Copper",
      values: '["earth","jungle","rock]',
    },
    {
      name: "Copper",
      values: '["earth","forest","reggae"]',
    },
    {
      name: "L'Ombre Dans L'Eau",
      values: '["fire","garden","reggae"]',
    },
    {
      name: "L'Ombre Dans L'Eau",
      values: '["air","garden","rock"]',
    },
    {
      name: "L'Ombre Dans L'Eau",
      values: '["earth","garden","jazz"]',
    },
    {
      name: "L'Ombre Dans L'Eau",
      values: '["water","garden","reggae"]',
    },
    {
      name: "Monocle Scent 1 Hinoki",
      values: '["fire","forest","rock"]',
    },
    {
      name: "Monocle Scent 1 Hinoki",
      values: '["air","forest","jazz"]',
    },
    {
      name: "Monocle Scent 1 Hinoki",
      values: '["earth","forest","rock"]',
    },
    {
      name: "Monocle Scent 1 Hinoki",
      values: '["water","forest","pop"]',
    },
    {
      name: "Alula",
      values: '["water","marketplace","rock"]',
    },
    {
      name: "Alula",
      values: '["earth","marketplace","jazz"]',
    },
    {
      name: "Alula",
      values: '["fire","marketplace","pop"]',
    },
    {
      name: "Alula",
      values: '["air","marketplace","pop"]',
    },
    {
      name: "Jazmin Yucatan",
      values: '["fire","jungle","jazz"]',
    },
    {
      name: "Jazmin Yucatan",
      values: '["air","jungle","reggae"]',
    },
    {
      name: "Jazmin Yucatan",
      values: '["earth","jungle","pop"]',
    },
    {
      name: "Jazmin Yucatan",
      values: '["water","jungle","jazz"]',
    },
    {
      name: "Poets of Berlin",
      values: '["earth","marketplace","rock"]',
    },
    {
      name: "Poets of Berlin",
      values: '["fire","garden","rock"]',
    },
    {
      name: "Poets of Berlin",
      values: '["water","forest","rock"]',
    },
    {
      name: "Poets of Berlin",
      values: '["air","forest","rock"]',
    },
    {
      name: "Mango Skin",
      values: '["fire","jungle","pop"]',
    },
    {
      name: "Mango Skin",
      values: '["air","jungle","pop"]',
    },
    {
      name: "Mango Skin",
      values: '["water","marketplace","pop"]',
    },
    {
      name: "Mango Skin",
      values: '["earth","garden","pop"]',
    },
    {
      name: "Nuit de Bakelite",
      values: '["water","garden","jazz"]',
    },
    {
      name: "Nuit de Bakelite",
      values: '["earth","forest","jazz"]',
    },
    {
      name: "Nuit de Bakelite",
      values: '["fire","marketplace","jazz"]',
    },
    {
      name: "Nuit de Bakelite",
      values: '["air","garden","jazz"]',
    },
    {
      name: "Black Afgano",
      values: '["earth","jungle","reggae"]',
    },
    {
      name: "Black Afgano",
      values: '["water","forest","reggae"]',
    },
    {
      name: "Black Afgano",
      values: '["fire","jungle","reggae"]',
    },
    {
      name: "Black Afgano",
      values: '["air","marketplace","reggae"]',
    },
];  


//Creating an array to store the information for each fragrance - description, image file, and brand. 
const fragranceDescriptions = 
  {
    "Dead Air": {description: "Woody, floral, green, Dead Air is an intriguing and mysterious fragrance. A dark fantasy of shadows and decadent drama, a breeze of davana and violet leaf is felt at the top, accompanied by a heart of narcissus that awakens the senses and stimulates the imagination. A captivating composition of date, oak wood and vetiver adds a touch of complexity.", 
      imageFile: "dead-air.png", 
      brand: "Oddity"}, 
    "Floating": {description: "The weightlessness of a day without any obligation. A fragrance that evokes feeling willfully adrift and the promise of warm weather.", 
      imageFile: "floating.png", 
      brand: "Liis"},
    "Steamed Rainbow": {description: "ROYGBIV reflections on soft weightless water steaming upwards forever fresh.", 
      imageFile: "steamed-rainbow.png", 
      brand: "DS and Durga"},
    "Tears": {description: "The first tear surprises you—a spicy green cognac, a hint of pink pepper, and orange flower. Then, tears start to fall down your face—impressionistic lilacs, the chill of olibanum lends gravity in the longer hours, musk melds with skin as the sadness fades.", 
      imageFile: "tears.png", 
      brand: "Regime des Fleurs"},
    "Fan Your Flames": {description: "Fan Your Flames captures the essence of a memorable evening, surrounded by those you care about. Imagine enjoying a moment of relaxation, lulled by the sweet smell of coconut, a glass of rum in hand, while sharing light and dreamy conversations about the happy days to come.", 
      imageFile: "fan-your-flames.png", 
      brand: "Nishane"},
    "Flaming Creature": {description: "Flaming Creature is a narcotic, hazy ode in fragrance to Flaming Creatures (1963) by American director Jack Smith (1932-1989), an entrancingly disjointed film inspiring this scent’s smoldering freshness. It produces subtle smoke, while scenes of wilting jasmine flash before your eyes, encouraging a surrender to its flickering hallucination.", 
      imageFile: "flaming-creature.png", 
      brand: "Marissa Zappas"},
    "Vetiver Extraordinaire": {description: "A pure essence of Haitian vetiver, overdosed, and sublimated with a first breath of freshness -bergamot, pink pepper and bitter orange- then comes the elegant woody association of sandalwood, cedar and cashmeran. The scent is bound to the skin by musk and oak moss.", 
      imageFile: "vetiver-extraordinaire.png", 
      brand: "Editions de Parfums Frederic Malle"},
    "Copper": {description: "The strength of red metal, hot and fresh at the same time. Bright notes of berries enliven those of dark leaves. Copper is an olfactory interrogation around harmony and contrasts. The synthetic notes of metal elegantly collide with natural vanilla and myrrh from Ethiopia, in an olfactory accord that never stops evolving on the skin.", 
      imageFile: "copper.png", 
      brand: "Commes des Garcon"},
    "L'Ombre Dans L'Eau": {description: "Tell the story of a dream, a calm river, a summer asleep under a weeping willow. Roses and blackcurrant berries come together in a fragrance: black currant leaves, fruity acidulous accents and the floral intensity of the rose.", 
      imageFile: "lombre-dans-leau.png", 
      brand: "Diptyque"},
    "Monocle Scent 1 Hinoki": {description: "The inspiration for this fragrance came from a cool spring morning spent in a bath at Tawaraya in Kyoto. The mosses at the foot of the trees give off vivid, square notes. Soaking in, smelling the camphor, the soft touch of greenery, the rich smell of wood guide us into a mystical world.", 
      imageFile: "hinoki.png", 
      brand: "Commes des Garcon"},
    "Alula": {description: "At the crossroads of continents, on the incense route linking India, the Persian Gulf, the Levant and Europe, the atmosphere of the spice markets weaves a veritable cultural tapestry. This fragrance emphasizes the warmth of plum and vanilla, while the incense and spices of saffron, turmeric and cardamom act like a gust in the glowing desert.", 
      imageFile: "alula.png", 
      brand: "Penhaligon's"},
    "Jazmin Yucatan": {description: "Jungle, humidity, snake plants, jazmín yucateco, crocodile by the cenote, shaded temple, limestone ruins.", 
      imageFile: "jazmin-yucatan.png", 
      brand: "DS and Durga"},
    "Poets of Berlin": {description: "Poets of Berlin is a tribute to David Bowie and his formative stay in the 70s in Berlin. This city full of creativity, attracted by its magnetic energy, translates into a daring encounter between blueberry, bamboo, orris and haiti vetiver.", 
      imageFile: "poets-of-berlin.png", 
      brand: "Vilhelm Parfumerie"},
    "Mango Skin": {description: "Mango Skin, with exotic and wild notes, is inspired by the warm colours and infinite skies of South Africa. The fragrance paints a picture of mango like you've never seen before.", 
      imageFile: "mango-skin.png", 
      brand: "Vilhelm Parfumerie"},
    "Nuit de Bakelite": {description: "A green, obsessive & addictive composition supported by tuberose abs, galbanum, angélique flower, fleur d’immortelle, wooden & leather notes & styrax. A focus on the small peduncle that connects the flower to the stem, the sound of latex when several stalks of tuberose tangle, the wild majesty of the Persian tuberose.", 
      imageFile: "nuit-de-bakelite.png", 
      brand: "Naomi Goodsir"},
    "Black Afgano": {description: "The untraditional hashish scent of this perfume extract is built around oud, spiced with saffron and vanilla, mixed with the power of ambrox: a true tribute to the resinous substance taken from the flowers and leaves of the cannabis plant.", 
      imageFile: "black-afgano.png", 
      brand: "Nasomatto"},
  };

//Grabbing the relevant html elements
const quizContainer = document.getElementById("container");
const questionContainer = document.getElementById("questionContainer");
const answerContainer = document.getElementById("answerContainer");
const resultsContainer = document.getElementById("results");
const fragranceResultContent = document.querySelector(".fragranceResultContent");
const fragranceImageFrame = document.querySelector(".fragranceImageFrame");
const fragranceText = document.querySelector(".fragranceText");
const exploreAnswersSection = document.querySelector(".exploreAnswersSection");
const differentAnswer = document.querySelector(".differentAnswer");

//setting the index for the current question
let currentQuestionIndex = 0;

//variables to store each individual user answer
let userAnswer1 = "";
let userAnswer2 = "";
let userAnswer3 = "";

//array to store all user answers
let userAnswers = [];

//string to store the fragranceResult, which is the fragrance that the user is matched to based on their answers
let fragranceResult = ""; 

//string to store the fragranceDescription
let fragranceDescription = "";

//ths function populates the html with the question and answers based on the question index. 
function handleQuestion(index) {
  
    //populating the question container with the current question from the questions array
    questionContainer.innerText = questions[index].question;

    //populating the answer container with the answers to the current question
    //a button will be created for each answer, containing the corresponding value, image file, and text
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

    //a click event listener is added to each answer
    //when an answer is clicked, the value will be added to the array that stores the user's answers and variables representing each user answer will be updated
    //when an answer is clicked, the animateAnswers function will be called to animate the buttons
    let answers = document.querySelectorAll(".quizAnswer");
    answers.forEach((answer) => {
      answer.addEventListener("click", (e) => {
        let answerValue = answer.value;
        userAnswers.push(answerValue);
        userAnswer1 = userAnswers[0];
        userAnswer2 = userAnswers[1];
        userAnswer3 = userAnswers[2];
        animateAnswers();
      });
    });
  };

//this function uses the GSAP javascript library to apply a spinning and fading animation for each button 
//after the animation is complete, the tlComplete function is called which increases the question index and handles the next question or ends the quiz
function animateAnswers() {
  gsap.to(".quizAnswer", {
    duration: 1,
    rotation: 360,
    opacity: 0, 
    delay: 0.5, 
    stagger: 0.2,
    ease: "sine.out", 
    force3D: true,
    onComplete: tlComplete
  });
};

//once all of the questions are answered, the endQuiz function will be called
//otherwise, the current question index will increase by 1 and the next question will be populated
function tlComplete(){
  if (currentQuestionIndex === questions.length-1) {
    endQuiz();
    } else {
    currentQuestionIndex++;
    }
  handleQuestion(currentQuestionIndex);
};


//this function stores the userAnswers array as a string and calculates the matching fragrance
//it loops through the fragranceNames array
//if theres's a match between the fragranceNames[i].values and userAnswersString, the fragranceResult will be set to fragranceNames[i].name
function calculateResult() {
    userAnswersString = JSON.stringify(userAnswers)
    console.log(userAnswersString);
    for (let i=0; i<fragranceNames.length; i++) {
        if (fragranceNames[i].values === userAnswersString) {
            fragranceResult = fragranceNames[i].name;
            return fragranceResult;
        }
    }
};


//this function calculcates the matching description based on the fragranceResult
function calculateDescription() {
  fragranceDescription = fragranceDescriptions[fragranceResult].description;
  return fragranceDescription;
};


//this function calculates the matching image file based on the fragranceResult
function calculateImageFile() {
  fragranceImageFile = fragranceDescriptions[fragranceResult].imageFile;
  return fragranceImageFile;
};

//this function calculates the matching brand based on the fragranceResult
function calculateBrand() {
  fragranceBrand = fragranceDescriptions[fragranceResult].brand;
  return fragranceBrand;
};

//this function is called when all of the questions are answered
//the quizContainer is hidden and the resultsContainer is made visible
//functions are called to calculate the matching fragrance and the description, image file, and brand for that fragrance
//the HTML for the resultsContainer is populated with all of the content for the matching fragrance
function endQuiz(){
  quizContainer.classList.add('hide')
  resultsContainer.classList.remove('hide');
  calculateResult();
  calculateDescription();
  calculateImageFile();
  calculateBrand();
  populateResultContent(); 
};


//this function populates the resultsContainer with the content for the matching fragrance - image file, brand, description
//it also displays the answers that the user chose and allows them to select an alternative answer to see how that would change their result
function populateResultContent() {
  resultsContainer.innerHTML = 
  `<h2>Quiz Completed!</h2>
    <div class="fragranceResultContent">
        <div class="fragranceImageFrame">
          <img src="../final-project/fragrance-images/${fragranceImageFile}">
        </div>
        <div class="fragranceText">
          <p>${fragranceBrand}</p>
          <p>${fragranceResult}</p>
          <p>${fragranceDescription}</p>
          <div class=fragranceDetails>
            <div>
              <p>Fragrance Family</p>
              <p>Spicy</p>
            </div>
            <div>
              <p>Notes</p>
              <p>Pink peppercorn, Juniper, Orange Ring Pop, 
                Night Blooming Jasmine, Wormwood, Sandalwood, 
                Cedarwood, Smoke, Patchouli, Rum.</p>
            </div>
          </div>
        </div>
        <div class="exploreAnswersSection">
          <div class="exploreQuestion">
            <p>"Which element represents your personality?"</p>
            <div class="currentAndAlternativeAnswers">
              <div class="yourAnswer">
                <p>Your Answer</p>
                <p>${userAnswer1}</p>
              </div>
              <div class="alternativeAnswers">
                <p>Try a Different Answer</p>
                <div>
                  <button class="differentAnswer" value="water" onclick="updateResults(event)">water</button>
                  <button class="differentAnswer" value="earth" onclick="updateResults(event)">earth</button>
                  <button class="differentAnswer" value="fire" onclick="updateResults(event)">fire</button>
                  <button class="differentAnswer" value="air" onclick="updateResults(event)">air</button>
                </div>
              </div>
            </div>
          </div>
          <div class="exploreQuestion">
            <p>"Which of these scenes feels most inviting to you?"</p>
            <div class="currentAndAlternativeAnswers">
              <div class="yourAnswer">
                <p>Your Answer</p>
                <p>${userAnswer2}</p>
              </div>
              <div class="alternativeAnswers">
                <p>Try a Different Answer</p>
                <div>
                  <button class="differentAnswer" value="garden" onclick="updateResults(event)">garden</button>
                  <button class="differentAnswer" value="marketplace" onclick="updateResults(event)">marketplace</button>
                  <button class="differentAnswer" value="forest" onclick="updateResults(event)">forest</button>
                  <button class="differentAnswer" value="jungle" onclick="updateResults(event)">jungle</button>
                </div>
              </div>
            </div>
          </div>
          <div class="exploreQuestion">
            <p>"If your life had a soundtrack, which genre would it be?"</p>
            <div class="currentAndAlternativeAnswers">
              <div class="yourAnswer">
                <p>Your Answer</p>
                <p>${userAnswer3}</p>
              </div>
              <div class="alternativeAnswers">
                <p>Try a Different Answer</p>
                <div>
                  <button class="differentAnswer" value="reggae" onclick="updateResults(event)">reggae</button>
                  <button class="differentAnswer" value="rock" onclick="updateResults(event)">rock</button>
                  <button class="differentAnswer" value="jazz" onclick="updateResults(event)">jazz</button>
                  <button class="differentAnswer" value="pop" onclick="updateResults(event)">pop</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <button onclick="restartQuiz()">Restart Quiz</button>`;
};

//this function updates the resultsContainer based on the alternative answer that the user selects
//it first updates the userAnswers array with the new answer
//next it calculates the new fragrance result and the corresponding description, image file, and brand
//finally it populates the resultsContainer with the new content
function updateResults(event) {
  let buttonValue=event.target.value
  if (buttonValue === "earth" || buttonValue === "water" || buttonValue === "fire" || buttonValue === "air") {
    userAnswers[0]= buttonValue.toString()
    userAnswer1=buttonValue.toString()
  }
  else if (buttonValue === "garden" || buttonValue === "marketplace" || buttonValue === "jungle" || buttonValue === "forest") {
    userAnswers[1]= buttonValue.toString()
    userAnswer2=buttonValue.toString()
  }
  else if (buttonValue === "rock" || buttonValue === "jazz" || buttonValue === "pop" || buttonValue === "reggae"){
    userAnswers[2]=buttonValue.toString()
    userAnswer3=buttonValue.toString()
  }
  console.log(buttonValue)
  console.log(userAnswers)
  calculateResult();
  calculateDescription();
  calculateImageFile();
  calculateBrand();
  populateResultContent();
};

//this function restarts the quiz
//it hides the resultsContainer, reveals the quizContainer, clears the userAnswers array, sets the currentQuestionIndex to 0, and populates the HTML with the first quiz question
function restartQuiz() {
    resultsContainer.classList.add('hide');
    resultsContainer.innerHTML = "";
    quizContainer.classList.remove('hide');
    userAnswers = [];
    currentQuestionIndex = 0;
    handleQuestion(currentQuestionIndex);
};

//calling the handleQuestion function to initiate the quiz
handleQuestion(currentQuestionIndex);

/*
References

I pulled handleQuestion function from this tutorial and adapted it to my website.
https://www.youtube.com/watch?v=_FnFPmA87XU
https://github.com/treehouse/quiz-app

I learned how to hide and show HTML content using classList.add and classList.remove
https://hackr.io/blog/how-to-build-a-javascript-quiz-app

I pulled the code for the spinning animation from this GSAP tutorial
https://codepen.io/GreenSock/pen/LYdzaoz 

I learned how to use a callback function to handle the next quiz question after the animation ends
https://gsap.com/resources/getting-started/control/ 

I pulled fragrance images and descriptions from Nose Paris
https://noseparis.com/en/
*/