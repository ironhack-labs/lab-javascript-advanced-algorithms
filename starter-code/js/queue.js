function initQueue(){
  Pile.queue.obj = new QueueDataStructure();
  Pile.queue.add = document.querySelector('#add-queue');
  Pile.queue.take = document.querySelector('#take-queue');
  Pile.queue.pile = document.querySelector('#queue-pile');
  Pile.queue.overflow = document.querySelector('#queue-overflow');
  Pile.queue.underflow = document.querySelector('#queue-underflow');
  Pile.queue.input = document.querySelector('#queue-input');
  Pile.queue.add.onclick = addToQueue;
  Pile.queue.take.onclick = takeFromQueue;

  fillStackQueue();
}

function addToQueue(){
  if(canAddQueue()){
    let value = Pile.queue.input.value;
    Pile.queue.obj.enqueue(value);
    addToPileQueue(value);
  }
  if(Pile.queue.underflowShowed){
    toggleQueueUnderflow();
  }
}

function takeFromQueue(){
  if(canTakeQueue()){
    Pile.queue.obj.dequeue();
    deleteFromPileQueue();
  }

  if(Pile.queue.overflowShowed){
    toggleQueueOverflow();
  }
  
}

function canAddQueue(){
  if(!Pile.queue.obj.canEnqueue() && !Pile.queue.overflowShowed){
    reachedQueueOverflow();
    return false;
  }
  Pile.queue.add.onclick = addToQueue;

  return true;
}

function canTakeQueue(){
  if(Pile.queue.obj.isEmpty() && !Pile.queue.underflowShowed){
    reachedQueueUnderflow();
    return false;
  }
  Pile.queue.take.onclick = takeFromQueue;
  return true;
}

function reachedQueueOverflow(){
  toggleQueueOverflow();
  Pile.queue.add.onclick = null;
  Pile.queue.take.onclick = takeFromQueue;
}

function toggleQueueOverflow(){
  Pile.queue.overflowShowed = !Pile.queue.overflow.classList.toggle('hidden');
}

function reachedQueueUnderflow(){
  toggleQueueUnderflow();
  Pile.queue.take.onclick = null;
  Pile.queue.add.onclick = addToQueue;
}

function toggleQueueUnderflow(){
  Pile.queue.underflowShowed = !Pile.queue.underflow.classList.toggle('hidden');
}

function fillStackQueue(){
  var element;
  for(let i = 0; i < 8; i++){
    element = document.createElement('div');
    element.setAttribute('class', 'pile-unit');
    Pile.queue.underflow.parentNode.insertBefore(element, Pile.queue.underflow);
  }
  
}

// Change
function addToPileQueue(value){
  let children = Pile.queue.pile.children;
  let referenceNode = Pile.queue.pile.children[children.length-2];
  let availableChilds = [...children].filter(x => ![...x.classList].includes('error'));
  let emptyChilds = availableChilds.filter(x => ![...x.classList].includes('active'));
  let nodeToFill = emptyChilds[emptyChilds.length-1]
  nodeToFill.classList = 'pile-unit active';
  nodeToFill.innerText = value;
  referenceNode.parentNode.insertBefore(nodeToFill, referenceNode.nextSibling);
}

function deleteFromPileQueue(){
  let childrenLength = Pile.queue.pile.children;
  let availableChilds = [...childrenLength].filter(x => ![...x.classList].includes('error'));
  let filledChilds = availableChilds.filter(x => [...x.classList].includes('active'));
  if(filledChilds.length > 0){
    filledChilds[0].classList = 'pile-unit';
    filledChilds[0].innerText = '';
  }
}