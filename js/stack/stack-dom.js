const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
  // ... your code goes here
};

const renderListStack = () => {
  // ... your code goes here
};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    const warningBottomStackStyle = warningBottomStack.style
    warningBottomStackStyle.display = 'block'
    
  } else if (type === 'overflow') {
    const warningTopStackStyle = warningTopStack.style
    warningTopStackStyle.display = 'block'
  }
};

const addToStack = () => {
  
  newStack.push(stackInput.value)

  if (newStack.canPush()) {

    newStack.stackControl.forEach((element, index) => {
      
      const childNodeIndex = (index*2) + 1
      const childNode= stackList.childNodes[childNodeIndex]
      childNode.setAttribute('class', 'active')
      childNode.innerText = element
      
    })
    const warningBottomStackStyle = warningBottomStack.style
    warningBottomStackStyle.display = 'none'

  } else {generateWarningStack('overflow')}
};

const removeFromStack = () => {
  
  
if (newStack.isEmpty()) {

  generateWarningStack('underflow')

} else if (newStack.stackControl.length === 1) {
  newStack.stackControl.pop()
  const childNode = stackList.childNodes[1]
  childNode.setAttribute('class', 'inactive')
  
  
  
  

}else {
  const warningTopStackStyle = warningTopStack.style
  warningTopStackStyle.display = 'none'
  newStack.stackControl.pop()
    newStack.stackControl.forEach (element => {
      index = (newStack.stackControl.length*2) + 1
      const childNode = stackList.childNodes[index]
      childNode.setAttribute('class', 'inactive')
      childNode.innerText= ''
    })
  
}


};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
