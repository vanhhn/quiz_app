const quiz = [
  {
      question: "The manager has asked new interns to help___plan a marketing campaign for some products.",
      ans1text: "she",
      ans2text: "her",
      ans3text: "herself",
      ans4text: "hers",
      answer: "her",
  },
  {
      question: "Any candidates joining the interview today must wear a badge with___name on.",
      ans1text: "its",
      ans2text: "it's",
      ans3text: "their",
      ans4text: "theirs",
      answer: "their",
  },{
      question: "Andrea eventually left her job at the restaurant to devote ___to taking care of her children.",
      ans1text: "she",
      ans2text: "her",
      ans3text: "herself",
      ans4text: "it",
      answer: "herself",
  },
  {
      question: "This year,Otis will come back to the Chinese Town where___has captured all the images in his latest book.",
      ans1text: "he",
      ans2text: "him",
      ans3text: "his",
      ans4text: "himself",
      answer: "he",

  }
]
const question = document.getElementById("quiz-question");
console.log(question);
console.log(question.textContent)
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answerElement = document.querySelectorAll(".answer");
console.log(option_a);
console.log(option_b);  
console.log(option_c);
console.log(option_d);
console.log(option_a.textContent);
console.log(option_b.textContent);
console.log(option_c.textContent);
console.log(option_d.textContent);

const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].ans1text);
console.log(quiz[currentQuestion].ans2text);
console.log(quiz[currentQuestion].ans3text);
console.log(quiz[currentQuestion].ans4text);

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;


submit.addEventListener("click", () => {
  const checkedAns = document.querySelector('input[type="radio"]:checked')
  console.log(checkedAns);
  // console.log(checkedAns.nextElementSibling.textContent);
  if( checkedAns === null){
      alert("Please select an answer");
  }else{
      if( checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer){
          score++;
      }

      currentQuestion++;
      if( currentQuestion < quiz.length){
          question.textContent = quiz[currentQuestion].question;
          option_a.textContent = quiz[currentQuestion].ans1text;
          option_b.textContent = quiz[currentQuestion].ans2text;
          option_c.textContent = quiz[currentQuestion].ans3text;
          option_d.textContent = quiz[currentQuestion].ans4text;
          checkedAns.checked = false;
      }else{
          alert("Your score is " + score + " out of " + quiz.length);
          location.reload();
      }

  }
});
