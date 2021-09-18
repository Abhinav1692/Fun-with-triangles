const sideInput= document.querySelectorAll(".side-input");
const hypoButton= document.querySelector("#hypo-button");
const output = document.querySelector("#output");

function calculateHypo() {
   var a=sideInput[0].value;
   var b=sideInput[1].value;
   if(a.length >0 && b.length >0)
   {    var side1=Number(a);
         var side2=Number(b);
      if(side1<=0 || side2<=0)
      {
         showMessage("Invalid input: Sides must be positive.")
      }
      else
         {  
            var hypo = Math.sqrt(side1**2 + side2**2);
           showMessage("The length of hypotenuse is " + String(hypo));
         }
   }
   else
   {
      showMessage("Please enter both the input fields");
   }

}

function showMessage(message)
{    
     output.innerText= message;
}

hypoButton.addEventListener("click" ,calculateHypo);