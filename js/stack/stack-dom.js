const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
  stackInput.Value = '';
};

const renderListStack = () => {
  for (let i = 0; i < newStack.MAX_SIZE; i++) {
    const li = document.createElement('li');
    li.classList.add('inactive');
    stackList.appendChild(li);
  }

  stackList.innerHTML = ''

  const items = newStack.display()

  for (let item of items) {
    const li = document.createElement('li');
    li.classList.add('active');
    li.innerText = item;
    stackList.appendChild(li);
  }

  for (let i = 0; i < newStack.MAX_SIZE - items.length; i++) {
    const li = document.createElement('li');
    li.classList.add('inactive');
    stackList.appendChild(li);
  }

};

renderListStack();

const generateWarningStack = type => {

};

const addToStack = () => {
  newStack.push(stackInput.value)
  renderListStack()
  clearStackInput()
};

const removeFromStack = () => {
  newStack.pop();
  renderListStack();
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
