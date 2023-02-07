let score = 0;
const totalQuestions = 6; //endre dette antallet dersom dere ønsker flere spørsmål (inkluder "start quiz" som om det er et spørmål)
const questions = [
  { //Dette er kodet som et spørsmål, men er egntlig kun satt opp for at dere skal slippe å lage en unik start
    options: [
      { text: "Start Quizen!", correct: false},
    ]
  },
  {
    question: "Hvor mange år varte Hundreårskrigen?",
    options: [
      { text: "116 år", correct: true }, //"true" = riktig svar. Skriv det inn i ulike linjer for å endre hvilken knapp som er riktig
      { text: "100 år", correct: false }, //Legg til eller fjern så mange svaralternativ som dere ønsker.
      { text: "143 år", correct: false } //Siste spørsmålslinje skal ikke ha komma.
    ],
    imageUrl: 'hundred years war.webp', //bytt ut med en ny bildeaddresse for hvert spørsmål. 400 og 200 er størrelsen i pixler.
    altText: 'hundreårskrigen'
  },
  {
    question: "Hva heter babyen til Elon Musk?",
    options: [
      { text: "U-AUNM Æ I", correct: false },
      { text: "X Æ A 12", correct: true },
      { text: "Æ G NURM", correct: false }
    ],
    imageUrl: 'elonbaby.png',
    altText: 'elon og elon jr'
  },
  {
    question: "Hva heter keiseren som herskert over Romerike i år r.284-304?",
    options: [
      { text: "Dionysus", correct: false },
      { text: "Augustus", correct: false }, 
      { text: "Diocletian", correct: true }
    ],
    imageUrl: 'iam_os-veHGlVkU4qQ-unsplash (1).jpg',
    altText: 'han karen fra romerike i år 284-304'
  },
  {
    question: "Hvem døde i Halden i 1718?",
    options: [
      { text: "Napoleon", correct: false },
      { text: "Karl XII av Sverige", correct: true },
      { text: "Gustav II Adolf av Sverige", correct: false }
    ],
    imageUrl: 'karlsweden.jpeg',
    altText: 'den som døde i halden'
  },
  {
    question: "Når ble Nirvana dannet?",
    options: [
      { text: "1997", correct: false },
      { text: "1994", correct: false },
      { text: "1987", correct: true }
    ],
    imageUrl: 'nirvana.jpeg',
    altText: 'nirvanameddrip'
  },
  // Kopier malen over for å legge til flere spørsmål. Husk å endre antall spørsmål øverst.
];

//________________Dere trenger ikke redigere noe under denne linjen________________//


// Lager en variabel for å holde styr på hvilket spørsmål som er aktivt
let currentQuestion = 0;

// Håndterer klikk på alternativer, øker poengsummen hvis riktig alternativ er valgt
const handleOptionClick = (isCorrect) => {
  if (isCorrect) {
    score++;
  }
  // Sjekker om dette er siste spørsmål
  if (currentQuestion === totalQuestions - 1) {
    const resultContainer = document.querySelector("#resultContainer");
    resultContainer.innerHTML = `Your final score is: ${score}/${questions.length-1}`;
    resultContainer.style.display = "block"; //Viser resultatteksten etter at siste spørsmål er besvart
    questionContainer.style.display = "none"; //skjuler spørsmålsboksen etter at siste spørsmål er besvart

  } else {
    currentQuestion++;
    renderQuestion();
  }
};
// Renderer det aktive spørsmålet til siden
const renderQuestion = () => {
  const questionContainer = document.querySelector("#questionContainer");
  const currentQ = questions[currentQuestion];
  questionContainer.innerHTML = `
    <h3>${currentQ.question}</h3>
    <img src="${questions[currentQuestion].imageUrl}" alt="Question Image">
    <div>
      ${currentQ.options
        .map(
          (option, index) => `
        <button onclick="handleOptionClick(${option.correct})">
          ${option.text}
        </button>
      `
        )
        .join("")}
    </div>
  `;
};
// Render første spørsmål når siden lastes
renderQuestion();
