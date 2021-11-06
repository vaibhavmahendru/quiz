const quizDB = [
    {
        question : "Q1 : Who was the father of computer?",
        a: "Charlie Babbage",
        b: "Dennis Ritchie",
        c: "Charles Babbage",
        d: "Ken Thompson",
        ans: "ans1"

    },

    {
        question : "Q2 : An HTML document can contain _____",
        a: "Attributes",
        b: "Tags",
        c: "Raw text",
        d: "All of the above",
       
        ans: "ans4"

    },

    {
        question : "Q3 : An HTML document is saved with the ____ extension.",
        a: ".htl",
        b: ".html",
        c: ".hml",
        d: ".htnl",
        ans: "ans2"

    },

    {
        question : "Q4 : CSS stands for -",

        a: "Cascade style sheets",
        b: "Color and style sheets",
        c: "Cascading style sheets",
        d: "None of the above",
        ans: "ans3"

    },
];

const question = document.querySelector('.question');  
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#score');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
 loadQuestion();

 const getCheckAnswer = () => {
     let  answer;

     answers.forEach((curAnsElem) =>{
         if(curAnsElem.checked){
             answer = curAnsElem.id; 
         }

     });
     return answer;
 };

 submit.addEventListener('click', () => {
     const checkedAnswer = getCheckAnswer();

     if(checkedAnswer === quizDB[questionCount].ans){
         score++;
     }
     questionCount++;

     const deselectAll = () => {
         answers.forEach(curAnsElem => curAnsElem.checked = false);
     }

     if(questionCount < quizDB.length){
         loadQuestion();
     }else{
         showScore.innerHTML = `
         <h3> You Scored ${score}/${quizDB.length} </h3>
         <button class ="btn" onClick = "location.reload()"> Play Again </button>
         `;
     }
     showScore.classList.remove('scorearea');
 });