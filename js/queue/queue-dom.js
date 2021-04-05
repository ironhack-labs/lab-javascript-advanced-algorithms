const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new QueueDataStructure();

const clearQueueInput = () => {
  queueInput.value = "";
};

const generateListQueue = () => {
  for(let i = 0; i<=queue.MAX_SIZE; i++){
  const listEl = document.createElement('li')
  listEl.setAttribute("class", "inactive")
  queueUL.append(listEl)
  }
};

generateListQueue();

const generateWarningQueue = type => {
  if (type === 'underflow') {
    warningBottomQueue.style.display = "block";
    warningBottomQueue.innerHTML = "Underflow";
    setTimeout(()=>{
      warningBottomQueue.style.display = "none";
      warningBottomQueue.innerHTML = ""
    }, 1000)
  } else if (type === 'overflow') {
    warningTopQueue.style.display = "block";
    warningTopQueue.innerHTML = "Overflow";
    setTimeout(()=>{
      warningTopQueue.style.display = "none";
      warningTopQueue.innerHTML = ""
    }, 1000)
  } 
};

const addToQueue = () => {
  const listArr= document.querySelectorAll(".list-queue .inactive");
  let item = queueInput.value;

  if(queue.canEnqueue()){
    queue.enqueue(item)
    
      listArr[0].classList.remove('inactive')
      listArr[0].classList.add('active')
      listArr[0].innerHTML = item;
  } else {
    generateWarningQueue('overflow')
  }
  clearQueueInput()
};

const removeFromQueue = () => {
  const listAct = document.querySelectorAll(".list-queue .active")
  
  if(!queue.isEmpty()){
      queue.dequeue()
      listAct[0].classList.remove('active')
      listAct[0].classList.add('inactive')
      listAct[0].innerHTML = "";
  } else {
    generateWarningQueue('underflow')
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
