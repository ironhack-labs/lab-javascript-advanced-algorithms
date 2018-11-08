var divsQueue = document.getElementsByClassName("queueItem")

var counterq = 0
var ponerq = document.getElementById("submitQueue")
var quitarq = document.getElementById("quitarQueue")

var inputq = document.getElementById("input-queue")

ponerq.addEventListener("click",function(){
  if(counterq === 8){
    $("<div id='queue0' class='over queueItem'>OVERFLOW :(</div>").insertBefore("#queue1")
  } else if(counterq >7) return
  
  counterq++

  if(counterq === 0){
    $("#queue9").remove()
  }

  
  switch(counterq){
    case 1:
      divsQueue[7].classList.add("active")
      $('#queue8').text(inputq.value)
      break
    case 2:
      divsQueue[6].classList.add("active")
      $('#queue7').text(inputq.value)
      break
    case 3:
      divsQueue[5].classList.add("active")
      $('#queue6').text(inputq.value)
      break
    case 4:
      divsQueue[4].classList.add("active")
      $('#queue5').text(inputq.value)
      break
    case 5:
      divsQueue[3].classList.add("active")
      $('#queue4').text(inputq.value)
      break
    case 6:
      divsQueue[2].classList.add("active")
      $('#queue3').text(inputq.value)
      break
    case 7:
      divsQueue[1].classList.add("active")
      $('#queue2').text(inputq.value)
      break
    case 8:
      divsQueue[0].classList.add("active")
      $('#queue1').text(inputq.value)
      break
  }
})

quitarq.addEventListener("click",function(){
  
  
  
  if(counterq < 0) return
  counterq--
  if(counterq === 8){
    $("#queue0").remove()
  }
  switch(counter){
    case 0:
      divsQueue[7].classList.remove("active")
      $('#queue8').text("")
      break
    case 1:
      divsQueue[6].classList.remove("active")
      $('#queue7').text("")
      break
    case 2:
      divsQueue[5].classList.remove("active")
      $('#queue6').text("")
      break
    case 3:
      divsQueue[4].classList.remove("active")
      $('#queue5').text("")
      break
    case 4:
      divsQueue[3].classList.remove("active")
      $('#queue4').text("")
      break
    case 5:
      divsQueue[2].classList.remove("active")
      $('#queue3').text("")
      break
    case 6:
      divsQueue[1].classList.remove("active")
      $('#queue2').text("")
      break
    case 7:
      divsQueue[0].classList.remove("active")
      $('#queue1').text("")
      break
  }
  if(counterq === -1) $("<div id='#queue9' class='under queueItem'>UNDERFLOW :(</div>").insertAfter("#queue8")
})