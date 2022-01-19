const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new Stack();

const clearStackInput = () => {
    stackInput.innerText = '';
};

const renderListStack = () => {
    
};

renderListStack(li);

const generateWarningStack = (type) => {
    if (type === 'underflow') {

    } else if (type === 'overflow') {

    }
};

const addToStack = () => {
    try {
        newStack.push();
    } catch (error) {
        newStack.push();
    }
    
};

const removeFromStack = () => {
    try {
        newStack.pop();
    } catch (error) {
        newStack.pop();
    }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
