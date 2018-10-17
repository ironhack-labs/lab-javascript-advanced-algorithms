const buttons = document.querySelectorAll('button');
const stackInput = document.querySelector('input');
const stackContainer = document.querySelector('.stack-container');

class StackDataStructure {
  constructor() {
    this.stack = [];
    this.maxNumberInStack = 10;
  }

  checkIfFull() {
    return this.stack.length === this.maxNumberInStack;
  }

  checkIfEmpty() {
    return this.stack.length === 0;
  }

  addItem(item) {
    if (this.checkIfFull()) {
      this.render();
      alert('Stack over flow!!! 😠😠😠')
      return 'Stack is full';
    } else {
      this.stack.push(item);
      return this.stack;
      // this.stack.length === 10 ? 'Stack is full' : 'Stack is not full';
    }
  }

  removeItem() {
    if (this.checkIfEmpty()) {
      this.render();
      alert('Stack underflow... 😞😞😞')
      return 'Stack underflow';
    } else {
      this.stack.pop();
    }
  }

  render() {  
    let blocks = '';
    for (let i = 0; i < this.maxNumberInStack; i++) {

      if(typeof this.stack[i] === 'undefined') {
        blocks = '<div class="alert alert-info" role="alert"> .</div>' + blocks;
      }
      else {
        blocks = `<div class="alert alert-warning text-center" role="alert">${this.stack[i]}</div>` + blocks;
      }
    }
    stackContainer.innerHTML = blocks;
  }
}

var stackDataStructure = new StackDataStructure;
stackDataStructure.render();

buttons.forEach(button => button.addEventListener('click', (e)=> {
  const innerText = e.target.innerText;
  if (innerText === 'Add') {
    const item = stackInput.value;
    stackDataStructure.addItem(item);
    stackInput.value = '.';
  }
  if (innerText === 'Remove') {
    stackDataStructure.removeItem();
  }
  stackDataStructure.render();
}));