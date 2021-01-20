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
    stackInput.value = ''
};

const renderListStack = () => {
    const stackItems = stackList.querySelectorAll('li')
    stackItems.forEach((elm, idx) => {
        const stackItem = newStack.stackControl[idx]
        if (stackItem || stackItem === '') {
            elm.className = 'active'
            elm.textContent = stackItem
        } else {
            elm.className = 'inactive'
        }
    })
    clearStackInput()
};

renderListStack();

const generateWarningStack = type => {
    let warningMsg
    if (type === 'underflow') {} else if (type === 'overflow') {
        warningMsg = document.querySelector('.stack-container .warning-top')
        console.log(warningMsg.style)
        warningMsg.style.display = 'block'
        warningMsg.textContent = 'Stack Overflow'

    }
};

const addToStack = () => {
    const elementPush = newStack.push(stackInput.value)
    if (elementPush === 'Stack Overflow') {
        generateWarningStack('overflow')
    } else {
        renderListStack()
    }
};

const removeFromStack = () => {
    // ... your code goes here
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);