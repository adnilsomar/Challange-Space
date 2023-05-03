const next = document.querySelector("#next")
const main = document.querySelector("#main")
const container = document.querySelector(".container")
const balls = document.querySelector(".balls")


function nextSlide(){
  main.classList.add("hide")
  container.classList.remove("hide")
 
}

function visibilityBalls(){
  
  if(window.innerWidth < 700 ){
    balls.classList.add("hide")
  }
  if(window.innerWidth > 700 ){
    balls.classList.remove("hide")
  }
}
next.addEventListener("click", nextSlide)

visibilityBalls()

window.addEventListener('resize', visibilityBalls)

