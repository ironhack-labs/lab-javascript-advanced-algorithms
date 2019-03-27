function initStack(){
  Pile.stack.obj = new StackDataStructure();
  Pile.stack.add = document.querySelector('#add-stack');
  Pile.stack.take = document.querySelector('#take-stack');
  Pile.stack.pile = document.querySelector('#stack-pile');
  Pile.stack.overflow = document.querySelector('#stack-overflow');
  Pile.stack.underflow = document.querySelector('#stack-underflow');
  Pile.stack.input = document.querySelector('#stack-input');
  Pile.stack.add.onclick = addToStack;
  Pile.stack.take.onclick = takeFromStack;

  fillStack();
}

function addToStack(){
  if(canAdd()){
    let value = Pile.stack.input.value;
    Pile.stack.obj.push(value);
    addToPile(value);
  }
  if(Pile.stack.underflowShowed){
    toggleStackUnderflow();
  }
}

function takeFromStack(){
  if(canTake()){
    Pile.stack.obj.pop();
    deleteFromPile();
  }

  if(Pile.stack.overflowShowed){
    toggleStackOverflow();
  }
  
}

function canAdd(){
  if(!Pile.stack.obj.canPush() && !Pile.stack.overflowShowed){
    reachedStackOverflow();
    return false;
  }
  Pile.stack.add.onclick = addToStack;

  return true;
}

function canTake(){
  if(Pile.stack.obj.isEmpty() && !Pile.stack.underflowShowed){
    reachedStackUnderflow();
    return false;
  }
  Pile.stack.take.onclick = takeFromStack;
  return true;
}

function reachedStackOverflow(){
  toggleStackOverflow();
  Pile.stack.add.onclick = null;
}

function reachedStackOverflow(){
  toggleStackOverflow();
  Pile.stack.take.onclick = null;
}

function toggleStackOverflow(){
  Pile.stack.overflowShowed = !Pile.stack.overflow.classList.toggle('hidden');
}

function reachedStackUnderflow(){
  toggleStackUnderflow();
  canTake();
  Pile.stack.take.onclick = null;
}

function toggleStackUnderflow(){
  Pile.stack.underflowShowed = !Pile.stack.underflow.classList.toggle('hidden');
}

function fillStack(){
  var element;
  for(let i = 0; i < 8; i++){
    element = document.createElement('div');
    element.setAttribute('class', 'pile-unit');
    Pile.stack.underflow.parentNode.insertBefore(element, Pile.stack.underflow)
  }
  
}

function addToPile(value){
  let childrenLength = Pile.stack.pile.children;
  let availableChilds = [...childrenLength].filter(x => ![...x.classList].includes('error'));
  let emptyChilds = availableChilds.filter(x => ![...x.classList].includes('active'));
  if(emptyChilds.length > 0){
    emptyChilds[emptyChilds.length-1].classList = 'pile-unit active';
    emptyChilds[emptyChilds.length-1].innerText = value;
  }
}

function deleteFromPile(){
  let childrenLength = Pile.stack.pile.children;
  let availableChilds = [...childrenLength].filter(x => ![...x.classList].includes('error'));
  let filledChilds = availableChilds.filter(x => [...x.classList].includes('active'));
  if(filledChilds.length > 0){
    filledChilds[0].classList = 'pile-unit';
    filledChilds[0].innerText = '';
  }
}