const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
  stackInput.value = ""
};

const renderListStack = () => {
  for (let i = 0; i < newStack.MAX_SIZE; i++){
  const spaceBlock = document.createElement('li')
  spaceBlock.setAttribute('class', 'inactive')
  document.querySelector('#stack-list').appendChild(spaceBlock)
  }
};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    warningBottomStack.innerText = newStack.pop()
    warningBottomStack.style.display = 'block'
  } else if (type === 'overflow') {
    warningTopStack.innerText = newStack.push()
    warningTopStack.style.display = 'block'
  }
};

const addToStack = () => {
  const blockValue = stackInput.value
  clearStackInput()
  if (newStack.push(blockValue) !== "Stack Overflow") activateStackBlock(blockValue)
  else generateWarningStack('overflow')
};

const removeFromStack = () => {
  if (newStack.pop() !== "Stack Underflow") deactivateStackBlock()
  else generateWarningStack('underflow')
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);

const activateStackBlock = blockText => {
  warningBottomStack.style.display = 'none'
  const newBlock = document.querySelector('#stack-list .inactive')
  newBlock.innerText = blockText
  newBlock.setAttribute('class', 'active')
}

const deactivateStackBlock = () => {
  warningTopStack.style.display = 'none'
  const totalActiveBlocks = document.querySelectorAll('#stack-list .active')
  newestActiveBlock = totalActiveBlocks[totalActiveBlocks.length - 1]
  newestActiveBlock.innerText = ""
  newestActiveBlock.setAttribute('class', 'inactive')
}