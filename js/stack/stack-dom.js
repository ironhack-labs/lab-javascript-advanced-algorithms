const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
    stackInput.value = '';
};

const renderListStack = () => {
    stackList.innerHTML = ''
    for (let i = 0; i < newStack.MAX_SIZE; i++) {
        const newLi = document.createElement('li')
        if (newStack.stackControl[i] !== undefined) newLi.innerText = newStack.stackControl[i]
        if (newLi.innerText) newLi.classList.add('active')
        else newLi.classList.add('inactive')
        stackList.appendChild(newLi)
    }
};

renderListStack();

const generateWarningStack = type => {
    if (type === 'underflow' && newStack.isEmpty()) {
        warningBottomStack.innerText = type
        warningBottomStack.style.display = 'block';
    } else if (type === 'overflow' && !newStack.canPush()) {
        warningTopStack.innerText = type
        warningTopStack.style.display = 'block';
    } else {
        warningBottomStack.style.display = 'none';
        warningTopStack.style.display = 'none';
    }
};

const addToStack = () => {
    const newEl = stackInput.value;
    clearStackInput();
    generateWarningStack('overflow');
    newStack.push(newEl)
    renderListStack();
};

const removeFromStack = () => {
    generateWarningStack('underflow');
    newStack.pop()
    renderListStack()
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);