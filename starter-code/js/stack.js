var pila = []
var crearoOverflow = document.createElement("div")
var crearUnderflow = document.createElement("div")
crearUnderflow.innerHTML = "<div id='pila9' class='under'>UNDERFLOW :(</div>"

var divsPila = document.getElementsByClassName("pilaItem")

var counter = 0
var poner = document.getElementById("submitPila")
var quitar = document.getElementById("quitarPila")

var input = document.getElementById("input-stack")

poner.addEventListener("click",function(){
  if(counter === 8){
    $("<div id='pila0' class='over pilaItem'>OVERFLOW :(</div>").insertBefore("#pila1")
  } else if(counter >7) return
  
  counter++

  if(counter === 0){
    $("#pila9").remove()
  }

  
  switch(counter){
    case 1:
      divsPila[7].classList.add("active")
      $('#pila8').text(input.value)
      break
    case 2:
      divsPila[6].classList.add("active")
      $('#pila7').text(input.value)
      break
    case 3:
      divsPila[5].classList.add("active")
      $('#pila6').text(input.value)
      break
    case 4:
      divsPila[4].classList.add("active")
      $('#pila5').text(input.value)
      break
    case 5:
      divsPila[3].classList.add("active")
      $('#pila4').text(input.value)
      break
    case 6:
      divsPila[2].classList.add("active")
      $('#pila3').text(input.value)
      break
    case 7:
      divsPila[1].classList.add("active")
      $('#pila2').text(input.value)
      break
    case 8:
      divsPila[0].classList.add("active")
      $('#pila1').text(input.value)
      break
  }
})

quitar.addEventListener("click",function(){
  
  
  
  if(counter < 0) return
  counter--
  if(counter === 8){
    $("#pila0").remove()
  }
  switch(counter){
    case 0:
      divsPila[7].classList.remove("active")
      $('#pila8').text("")
      break
    case 1:
      divsPila[6].classList.remove("active")
      $('#pila7').text("")
      break
    case 2:
      divsPila[5].classList.remove("active")
      $('#pila6').text("")
      break
    case 3:
      divsPila[4].classList.remove("active")
      $('#pila5').text("")
      break
    case 4:
      divsPila[3].classList.remove("active")
      $('#pila4').text("")
      break
    case 5:
      divsPila[2].classList.remove("active")
      $('#pila3').text("")
      break
    case 6:
      divsPila[1].classList.remove("active")
      $('#pila2').text("")
      break
    case 7:
      divsPila[0].classList.remove("active")
      $('#pila1').text("")
      break
  }
  if(counter === -1) $("<div id='pila9' class='under pilaItem'>UNDERFLOW :(</div>").insertAfter("#pila8")
})