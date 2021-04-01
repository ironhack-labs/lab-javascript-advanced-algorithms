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
  // const newBlock = document.querySelector('#queue-list .inactive')
  // newBlock.innerText = blockText
  // newBlock.setAttribute('class', 'active')
  const firstBlock = document.querySelector('#queue-list li')
  const newBlock = document.querySelector('#queue-list .inactive')
  newBlock.setAttribute('class', 'active')
  const activeBlocks = document.querySelectorAll('#queue-list .active')
  console.log(activeBlocks)
  for (let i = activeBlocks.length - 1; i > 0; i--){
    activeBlocks[i].innerText = activeBlocks[i].previousSibling.innerText
  }

  firstBlock.innerText = blockText
}
//LO LOGRE!!!!!!!!!!

const deactivateQueueBlock = () => {
  warningTopQueue.style.display = 'none'
  const totalActiveBlocks = document.querySelectorAll('#queue-list .active')
  newestActiveBlock = totalActiveBlocks[totalActiveBlocks.length - 1]
  newestActiveBlock.innerText = ""
  newestActiveBlock.setAttribute('class', 'inactive')
}