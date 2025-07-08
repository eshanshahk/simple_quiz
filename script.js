const questions =[
    {
        question: "What is your largest animal in the world?",
        answers:[
            {text :"Shark", correct:false},
            {text :"elephant", correct:true},
            {text :"deer", correct:false},
            {text :"panda", correct:false},
        ]
    },
    {
        question: "What is the smallest animal?",
        answers:[
            {text :"dog", correct:false},
            {text :"cat", correct:false},
            {text :"ant", correct:true},
            {text :"fish", correct:false},
        ]
    }
];
const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next"
    showQuestion();
}

function showQuestion(){
    let currentQuestionIndex=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}