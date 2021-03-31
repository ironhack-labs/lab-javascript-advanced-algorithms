const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new QueueDataStructure();

const clearQueueInput = () => {
  queueInput.value = ""
};

const generateListQueue = () => {
  for (let i = 0; i < queue.MAX_SIZE; i++){
  const spaceBlock = document.createElement('li')
  spaceBlock.setAttribute('class', 'inactive')
  document.querySelector('#queue-list').appendChild(spaceBlock)
  }
};

generateListQueue();

const generateWarningQueue = type => {
  if (type === 'underflow') {
    warningBottomQueue.innerText = queue.dequeue()
    warningBottomQueue.style.display = 'block'
  } else if (type === 'overflow') {
    warningTopQueue.innerText = queue.enqueue()
    warningTopQueue.style.display = 'block'
  }
};

const addToQueue = () => {
  const blockValue = queueInput.value
  clearQueueInput()
  if (queue.enqueue(blockValue) !== "Queue Overflow") activateQueueBlock(blockValue)
  else generateWarningQueue('overflow')
};

const removeFromQueue = () => {
  if (queue.dequeue() !== "Queue Underflow") deactivateQueueBlock()
  else generateWarningQueue('underflow')
};


addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);

const activateQueueBlock = blockText => {
  warningBottomQueue.style.display = 'none'
  const newBlock = document.querySelector('#queue-list .inactive')
  newBlock.innerText = blockText
  newBlock.setAttribute('class', 'active')
}
//^^No pude averiguar ni ingeniarmelas para hacer que funcione como queue, 
//intente durante literalmente horas mil iteraciones y no lo logre.
//La logica par esto estaba muy complicado, hice dibujos y arrays y .reverse() y mil cosas mas 
//pero no lo pude lograr ni en la vida real.
//Me gusto el ejercicio en general, pero he de decir que me duermo con 
//un mal sabor de boca por no lograr esto y estoy triste por no haber resuleto el problema.....
// :,(

const deactivateQueueBlock = () => {
  warningTopQueue.style.display = 'none'
  const totalActiveBlocks = document.querySelectorAll('#queue-list .active')
  newestActiveBlock = totalActiveBlocks[totalActiveBlocks.length - 1]
  newestActiveBlock.innerText = ""
  newestActiveBlock.setAttribute('class', 'inactive')
}