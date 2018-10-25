
let buttons = document.querySelectorAll('button');
let storageInput = document.querySelector('input');
let storageContainer = document.querySelector('storage-container')


// functions: push, pop, peek, length
class StackDataStructure {
  constructor() {
  this.storage = [];
  this.max = 3;
  }
  push(value) {
    if (this.storage.length >= this.max) {
      this.render();
      alert("too big");
      return this.storage;
    }
    else 
    { 
    this.storage.push(value);
    return this.storage;
  }
  }

pop() {
      
  if(this.storage.length === 0) {
    alert("no more");
    return 'no more';
  }
  else {
    this.storage.pop();
  } 
}

/*
function size() {
    return this.storage.length;
  }

this.peek = function() {
;
    return this.storage[this.storage.length-1]
};
};
*/

render() {  
  let blocks = '';
  for (let i = 0; i < this.max; i++) {

    if(typeof this.storage[i] === 'undefined') {
      blocks = '<div class="alert alert-info" role="alert">empty</div>' + blocks;
    }
    else {
      blocks = `<div class="alert alert-warning text-center" role="alert">${this.storage[i]}</div>` + blocks;
    }
  }
  storageContainer.innerHTML = blocks;

}

}

let myStack = new StackDataStructure();

myStack.render();

buttons.forEach(button => button.addEventListener('click', (e)=> {
  const innerText = e.target.innerText;
  if (innerText === 'Add') {
    const item = storageInput.value;
    myStack.addItem(item);
    storageInput.value = '.';
  }
  if (innerText === 'Remove') {
    myStack.removeItem();
  }
  myStack.render();
}));myStack.push(2);
myStack.push(1);

console.log(myStack.peek());

