const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
    stackInput.value = ''
};

const renderListStack = () => {
    document.querySelector('.stack-container .warning-bottom').style.display = 'none'
    document.querySelector('.stack-container .warning-top').style.display = 'none'
    const stackItems = stackList.querySelectorAll('li')
    stackItems.forEach((elm, idx) => {
        const stackItem = newStack.stackControl[idx]
        if (stackItem || stackItem === '') {
            elm.className = 'active'
            elm.textContent = stackItem
        } else {
            elm.className = 'inactive'
            elm.textContent = ''
        }
    })
    clearStackInput()
};

renderListStack();

const generateWarningStack = type => {
    let warningMsg
    if (type === 'underflow') {
        warningMsg = document.querySelector('.stack-container .warning-bottom')
        warningMsg.textContent = 'Stack Underflow'
    } else if (type === 'overflow') {
        warningMsg = document.querySelector('.stack-container .warning-top')
        warningMsg.textContent = 'Stack Overflow'
    }
    warningMsg.style.display = 'block'
};

const addToStack = () => {
    const pushedItem = newStack.push(stackInput.value)
    if (pushedItem === 'Stack Overflow') {
        generateWarningStack('overflow')
    } else {
        renderListStack()
    }
};

const removeFromStack = () => {
    // ... your code goes here
    const removedItem = newStack.pop()
    if (removedItem === 'Stack Underflow') {
        generateWarningStack('underflow')
    } else {
        renderListStack()
    }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);