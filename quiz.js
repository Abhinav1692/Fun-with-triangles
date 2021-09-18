const quizForm= document.querySelector(".quiz-form");
const submitButton = document.querySelector("#submit-answer-button");
const output= document.querySelector("#output");


const correctAnswer = ["90°", "acute", "one right angle", "40°", "Equilateral triangle", "a + b + c" , "12, 16, 20",  "no", "45°","60°"];



function checkScore()
{
    const quizResults = new FormData(quizForm); //creates 
    // new object of form data
    var index=0;
    var score=0;
    for(let value of quizResults.values())
    {
      if(value===correctAnswer[index]){
           score+=1;
      }
      index+=1;
    }
    output.innerText="The total score is "+  String(score);   

}



submitButton.addEventListener("click", checkScore);