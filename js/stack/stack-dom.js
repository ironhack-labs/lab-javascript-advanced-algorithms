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

let counterLi = 0;
const renderListStack = () => {
    const li = document.createElement('li')
    li.setAttribute('class', 'inactive')
    stackList.appendChild(li);
    counterLi++
    if (counterLi < 10) renderListStack()
};

renderListStack();
const stackLis = document.querySelectorAll('.list-stack li');

const generateWarningStack = type => {
    if (type === 'underflow') {
        warningBottomStack.innerHTML = 'Stack Underflow'
        warningBottomStack.style.display = 'block'
    } else if (type === 'overflow') {
        warningTopStack.innerHTML = 'Stack Overflow'
        warningTopStack.style.display = 'block'
    }
};
const changesState = (text, length) => {
    stackLis[length].innerHTML = text
    stackLis[length].classList.toggle('active');
    stackLis[length].classList.toggle('inactive');
}

const addToStack = () => {
    if (newStack.push(stackInput.value) === 'Stack Overflow') {
        generateWarningStack('overflow')
    } else {
        if (warningBottomStack.style.display === 'block') warningBottomStack.style.display = 'none'
        changesState(stackInput.value, newStack.stackControl.length - 1)
    }
    clearStackInput()
};

const removeFromStack = () => {
    if (newStack.pop() === 'stack Underflow') {
        generateWarningStack('underflow')
    } else {
        if (warningTopStack.style.display === 'block') warningTopStack.style.display = 'none'
        changesState('', newStack.stackControl.length)
    }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);