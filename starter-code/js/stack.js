var stack = new StackDataStructure();
var element = document.querySelector('#element');
var addButton = document.querySelector('#add');
var takeButton = document.querySelector('#take');
addButton.onclick = function() {
  if (element.value != '' && stack.canPush){
    stack.push(element.value);
    printStack(element.value);
  }
  if (stack.stackControl.length === stack.MAX_SIZE){
    var h3 = document.querySelector('#over') ;
    h3.classList.remove('hide');
    h3.classList.add('show');
  }else document.querySelector('#over').classList.add('hide');
  if (document.querySelector('#under').getAttribute('class') === 'show'){
    document.querySelector('#under').classList.remove('show');
    document.querySelector('#under').classList.add('hide');
  }
};

takeButton.onclick = function(){
  stack.pop();
  deleteStack();
  if (document.querySelector('#over').getAttribute('class') === 'show'){
    document.querySelector('#over').classList.remove('show');
    document.querySelector('#over').classList.add('hide');
  }
  if (stack.stackControl.length===0){
    document.querySelector('#under').classList.remove('hide');
    document.querySelector('#under').classList.add('show');
  }else document.querySelector('#under').classList.add('hide');
}



function printStack (element) {
  var empty = document.querySelectorAll('.empty');
  empty[empty.length-1].innerHTML = element;
  empty[empty.length-1].classList.remove('empty');
  empty[empty.length-1].classList.add('noempty');
}

function deleteStack (){
  var noempty = document.querySelector('.noempty');
  noempty.innerHTML = '';
  noempty.classList.remove('noempty');
  noempty.classList.add('empty');
}