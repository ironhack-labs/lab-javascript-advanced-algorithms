let queueData = new QueueDataStructure()

let queueInput = document.getElementById('queue-input')
let queueAddBtn = document.getElementById('add-queue')
let queueRemoveBtn = document.getElementById('delete-queue')
let queueDivs = document.getElementById('queue-div')
let queueErrorDivOver = document.getElementById('over-queue')
let queueErrorDivUnder = document.getElementById('under-queue')

let queueArrAux = []

for(var i = 0; i < queueDivs.children.length; i++) {
  queueArrAux.push(queueDivs.children[i])
}

let q = queueArrAux.length - 1

// console.log(queueArrAux)

queueAddBtn.addEventListener('click', function () {
  
  if (queueData.canEnqueue()) {
    queueData.enqueue(queueInput.value)
    queueArrAux[q].innerHTML = queueInput.value
    queueArrAux[q].classList.add('addedelement')
    q--
    queueErrorDivUnder.style.display = 'none'
  } else {
    queueErrorDivOver.style.display = 'block' //blcock
  }
  
})

queueRemoveBtn.addEventListener('click', () => {

  if (queueData.isEmpty()) {
    queueErrorDivUnder.style.display = 'block'
  } else {
    
    q++
    queueErrorDivOver.style.display = 'none'
    queueData.dequeue()
    queueArrAux[q].innerHTML = ""
    queueArrAux[q].classList.remove('addedelement')
  }
  
})