const person = document.getElementById("person");
const pleyerOne = document.getElementById("pleyer_one");
const pleyerOneInput = document.getElementById("pleyer_One_input");
const startBtn = document.getElementById("start_btn");
const input_err = document.getElementById("input_err");
// pleayer two
const input_err2 = document.getElementById("input_err2");
const GuessBtn = document.getElementById("Guess2");
const pleyer_Two = document.getElementById("pleyer_Two");
const chance = document.getElementById("chance");
const pleyerOneInput2 = document.getElementById("pleyer_One_input2")
let pleayerOneNumber;
let chanceNumber = 3;


startBtn.addEventListener("click" , function(e){
    e.preventDefault()
    if(pleyerOneInput.value){
      if(pleyerOneInput.value -10 ){
        if(pleyerOneInput.value > 0 && pleyerOneInput.value<10){
            input_err.innerText =""
            pleayerOneNumber= pleyerOneInput.value;
            pleyer_Two.style.display="block"
            pleyerOne.style.display ="none"
            console.log(pleayerOneNumber);    

        }else{
            input_err.innerText = "please give number betwwen 1 to 10"
        }
      }else{
        input_err.innerText = "please give number"
      }
    }else{
        input_err.innerText = "please give number value"
    }
})


                 // pleayer-two
GuessBtn.addEventListener("click" ,function(e){
   e.preventDefault()
   if(pleyerOneInput2.value){
     if(pleyerOneInput2.value-10){
      if(pleyerOneInput2.value >0 && pleyerOneInput2.value <10){
        input_err2.innerText = ""
        chanceNumber --
        pleyerOneInput2.value =""
        if(chanceNumber >0 && chanceNumber <3){
            if(pleayerOneNumber == pleyerOneInput2.value){
                input_err2.innerText = "pleayer two winner"
                input_err2.style.color ="green"
               }else{
                chance.innerText = chanceNumber
               }
           }else{
            input_err2.innerText ="pleayer one winner"
            input_err2.style.color ="green"            
       }
      }else{
        input_err2.innerText ="please give number betwwen 1 to 10"
      }
     }else{
       input_err2.innerText = "please give number"
     }
   }else{
    input_err2.innerText = "please give your guess number"
   }

})
   

