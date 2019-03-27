function initStack(){
  Pile.stack.obj = new StackDataStructure();
  Pile.stack.add = document.querySelector('#add-stack');
  Pile.stack.take = document.querySelector('#take-stack');
  Pile.stack.pile = document.querySelector('#stack-pile');

  checkStackLength();
}

function checkStackLength(){
  if(Pile.stack.obj.isEmpty()){
    Pile.stack.take.onclick = stackUnderflow;
  }else{
    clearStackUnderFlow()
    Pile.stack.take.onclick = stackTake;
  }
}

function stackUnderflow(){

}

function stackTake(){
  
}