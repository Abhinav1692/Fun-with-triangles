const sideInput = document.querySelectorAll(".side-input");
const calculateButton = document.querySelector("#calculate-button");
const output = document.querySelector("#output");

function calculateArea() {
   var a = sideInput[0].value;
   var b = sideInput[1].value;
   var c = sideInput[2].value;
   if (a.length > 0 && b.length > 0 && c.length > 0) {
      var side1 = Number(a);
      var side2 = Number(b);
      var side3 = Number(c);
      if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {

         if (side1 <= 0 || side2 <= 0 || side3 < 0) {
            showMessage("Invalid input: Sides must be positive.")
         } else {
            var s = (side1 + side2 + side3) / 2;
            var heron = s * (s - side1) * (s - side2) * (s - side3);
            var area = Math.sqrt(heron);
            area = area.toFixed(3);
            showMessage("The area of the triangle is " + String(area));
         }
      } else {
         showMessage(" Please enter valid side length.")
      }
   } else {
      showMessage("Please enter all the input fields");
   }
}


function showMessage(message) {
   output.innerText = message;
}



calculateButton.addEventListener("click", calculateArea);