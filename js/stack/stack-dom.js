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
    let stack = stackList.querySelectorAll('inactive')
    stack.forEach((elm) => {
        elm.className = 'active'
    })

};

renderListStack();

const generateWarningStack = type => {
    if (type === 'underflow') {
        // ... your code goes here
        warningBottomStack.textContent = 'Stack Underflow'
    } else if (type === 'overflow') {
        // ... your code goes here
        warningTopStack.textContent = 'Stack Overflow'

    }

};

const addToStack = () => {
    // ... your code goes here
    if (newStack.canPush === 'Stack Overflow') {
        generateWarningStack('overflow')
    } else {
        renderListStack()
    }



};

const removeFromStack = () => {
    // ... your code goes here
    if (newStack.pop === 'Stack Underflow') {
        generateWarningStack('underflow');
    } else {
        renderListStack()
    }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);