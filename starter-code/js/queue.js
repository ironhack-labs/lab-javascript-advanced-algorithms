function initQueue(){
  Pile.queue.obj = new QueueDataStructure();
  Pile.queue.add = document.querySelector('#add-queue');
  Pile.queue.take = document.querySelector('#take-queue');
  Pile.queue.pile = document.querySelector('#queue-pile');
  Pile.queue.overflow = document.querySelector('#queue-overflow');
  Pile.queue.underflow = document.querySelector('#queue-underflow');
  Pile.queue.input = document.querySelector('#queue-input');

  fillStackQueue();
}

function addToQueue(){
  if(canAddQueue()){
    let value = Pile.queue.input.value;
    Pile.queue.obj.push(value);
    addToPileQueue(value);
  }
  if(Pile.queue.underflowShowed){
    toggleStackUnderflow();
  }
}

function takeFromQueue(){
  if(canTakeQueue()){
    Pile.queue.obj.pop();
    deleteFromPileQueue();
  }

  if(Pile.queue.overflowShowed){
    toggleStackOverflow();
  }
  
}

function canAddQueue(){
  if(!Pile.queue.obj.canPush() && !Pile.queue.overflowShowed){
    reachedStackOverflow();
    return false;
  }
  Pile.queue.add.onclick = addToStack;

  return true;
}

function canTakeQueue(){
  if(Pile.queue.obj.isEmpty() && !Pile.queue.underflowShowed){
    reachedStackUnderflow();
    return false;
  }
  Pile.queue.take.onclick = takeFromStack;
  return true;
}

function reachedQueueOverflow(){
  toggleQueueOverflow();
  Pile.queue.add.onclick = null;
  Pile.queue.take.onclick = takeFromStack;
}

function toggleQueueOverflow(){
  Pile.queue.overflowShowed = !Pile.queue.overflow.classList.toggle('hidden');
}

function reachedQueueUnderflow(){
  toggleQueueUnderflow();
  Pile.queue.take.onclick = null;
  Pile.queue.add.onclick = addToStack;
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

function addToPileQueue(value){
  let childrenLength = Pile.queue.pile.children;
  let availableChilds = [...childrenLength].filter(x => ![...x.classList].includes('error'));
  let emptyChilds = availableChilds.filter(x => ![...x.classList].includes('active'));
  if(emptyChilds.length > 0){
    emptyChilds[emptyChilds.length-1].classList = 'pile-unit active';
    emptyChilds[emptyChilds.length-1].innerText = value;
  }
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