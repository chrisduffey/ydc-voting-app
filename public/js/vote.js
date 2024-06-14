const buttonEls = document.querySelectorAll(".voteButton");
console.log(buttonEls);

for (let i = 0; i < buttonEls.length; i++) {
    buttonEls[i].addEventListener("click", function(){
        
        console.log(event.target.id)
    
    })
  }
  

