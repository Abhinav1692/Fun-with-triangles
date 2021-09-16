const angleInput = document.querySelectorAll(".angles");
const isTriangleButton = document.querySelector("#is-triangle-button");
const output1 = document.querySelector("#output1");
const output2 = document.querySelector("#output2");

function checkTriangle() {
   output2.style.display = "none";
   output1.style.display = "none";
   
   var a1 = angleInput[0].value;
   var a2 = angleInput[1].value;
   var a3 = angleInput[2].value;

   if (a1.length>0 && a2.length>0 && a3.length>0) //check whether all input fields are filled or not.
   {   

      const sum = calculateSum(Number(a1), Number(a2), Number(a3));
      if (sum === 180) {
         showMessage1("Yes😊, The given angles form a triangle.");
      } else {
         showMessage1("Oh!😮 The given angles don't form a triangle.");
         if (sum === -1)
            showMessage2("Hint: All the angles must be positive.")
         else
            showMessage2("Hint: Sum of all the angles are not 180 degree")
      }
   } else {
      showMessage1("Oh!😮 The given angles don't form a triangle.");
      showMessage2("Hint: Please enter all the input fields.");
   }
}

function calculateSum(a1, a2, a3) {
   if (a1 > 0 && a2 > 0 && a3 > 0)
      return a1 + a2 + a3;
   else
      return -1;
}

function showMessage1(message) {
   output1.style.display = "block";
   output1.innerText = message;
}

function showMessage2(message) {
   output2.style.display = "block";
   output2.innerText = message;
}



isTriangleButton.addEventListener("click", checkTriangle);