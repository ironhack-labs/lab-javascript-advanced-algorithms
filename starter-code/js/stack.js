let stack = new StackDataStructure();
const overflow = document.querySelector('.overflow');
const underflow = document.querySelector('.underflow');

document.querySelector('.btn-add').addEventListener('click', addItem, false);
document.querySelector('.btn-take').addEventListener('click', takeItem, false);


function addItem() {
    underflow.classList = 'underflow invisible';
    let stackInput = document.querySelector('#stack-input').value;
    if(typeof stack.push(stackInput) === 'string'){
        stackOverflow();
    } else {
        let stackItems = [...document.querySelectorAll('li.empty')];
        let listItem = stackItems[stackItems.length - 1];
        listItem.innerHTML = stackInput;
        listItem.className = 'stack-item full';
    }
}

function takeItem() {
    overflow.classList = 'overflow invisible';
    if(stack.pop() === 'Stack Underflow') {
        stackUnderflow();
    } else {
        let stackItems = [...document.querySelectorAll('li.full')];
        let listItem = stackItems[0];
        listItem.innerHTML = '';
        listItem.className = 'stack-item empty';
    }
}

function stackOverflow() {
    overflow.classList = 'overflow visible';
}

function stackUnderflow() {
    underflow.classList = 'underflow visible';
}