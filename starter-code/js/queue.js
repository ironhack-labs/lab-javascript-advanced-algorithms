let queue = new QueueDataStructure()
let addQueue = document.getElementById('add-queue')
let deleteQueue = document.getElementById('delete-queue')
let queueElement = document.getElementById('queue-input')
let queueList = document.getElementsByClassName('queue-element')
let removedQueue = document.querySelector('#removed_queue  ul')
let queueOver = document.getElementById('error-queue-over')
let queueUnder = document.getElementById('error-queue-under')

addQueue.addEventListener('click', e=>{
  if(queue.canEnqueue()) {
    let guardar = queue.enqueue(queueElement.value)
    console.log(queue.queueControl)
  for(i = 0; i<queue.queueControl.length; i++) {
    queueList[queue.MAX_SIZE - queue.queueControl.length].innerText = queue.queueControl[0]
    queueList[queue.MAX_SIZE - queue.queueControl.length].setAttribute('class','queue-item queue-element')
    queueUnder.setAttribute('class','error-queue')
    console.log(queue.queueControl)
  }
} else {
    queueOver.setAttribute('class','display error-queue')
  }
})

deleteQueue.addEventListener('click', e=>{
  if(!queue.isEmpty()){
    queueList[queue.queueControl.length].innerText = ''
    queueList[queue.MAX_SIZE - (queue.MAX_SIZE-queue.queueControl.length)].setAttribute('class','queue-element')
    console.log(queue.queueControl)
    let queueDlt = document.createElement('li')
    queueDlt.innerText = queue.dequeue()
    removedQueue.appendChild(queueDlt)
    queueOver.setAttribute('class','error-queue')
    } else {
      queueUnder.setAttribute('class','display error-queue')
    }
 
})