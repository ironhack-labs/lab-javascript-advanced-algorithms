let stack = new StackDataStructure();

printList();

let addStack = document.getElementById("add-stack").addEventListener("click", addStackItem);
let takeStack = document.getElementById("take-stack").addEventListener("click", takeStackItem);
let valueStackInput = '';
let stackItemsEmpty = '';
let stackItemsFull = '';

function printList() {

    let stackDOMEl = document.querySelector('.stack');
    let stackItem = '';

    for (i = 0; i < stack.MAX_SIZE; i++) {
        stackItem = document.createElement('li');
        stackItem.classList.add('empty-stack');
        stackDOMEl.appendChild(stackItem);
    }
}

function addStackItem() {
    valueStackInput = document.querySelector('.input-stack').value;
    if (valueStackInput == ''){
        alert("You must put a value")
    } else {
        if (stack.canPush()) {

            let takeErrorDivDOMEl = document.getElementById("errorTakeStack");
            takeErrorDivDOMEl.style.display = "none";
            takeErrorDivDOMEl.disabled = false;
            let takeStack = document.getElementById("take-stack")
            takeStack.classList.remove('disabled');

            stackItemsEmpty = document.querySelectorAll('.empty-stack');
            stackItemsEmpty[stackItemsEmpty.length - 1].innerHTML = valueStackInput;
            stackItemsEmpty[stackItemsEmpty.length - 1].classList.remove('empty-stack');
            stackItemsEmpty[stackItemsEmpty.length - 1].classList.add('full-stack');
            stackItemsEmpty[stackItemsEmpty.length - 1].classList.add('list-group-item');
            stack.push(valueStackInput);
        } else {
            let stackErrorDivDOMEl = document.getElementById("errorAddStack");
            stackErrorDivDOMEl.style.display = "block";
            stackErrorDivDOMEl.disabled = true;
            let addStack = document.getElementById("add-stack")
            addStack.classList.add('disabled');
        }
    }

    
}

function takeStackItem() {
    let stackErrorDivDOMEl = document.getElementById("errorAddStack");
    stackErrorDivDOMEl.style.display = "none";
    let addStack = document.getElementById("add-stack")
    addStack.classList.remove('disabled');

    if(stack.pop()){
        let takeErrorDivDOMEl = document.getElementById("errorTakeStack");
        takeErrorDivDOMEl.style.display = "block";
        takeErrorDivDOMEl.disabled = true;
        let takeStack = document.getElementById("take-stack")
        takeStack.classList.add('disabled');
    } else {
        stackItemsFull = document.querySelectorAll('.full-stack');
        stackItemsFull[0].innerHTML = '';
        stackItemsFull[0].classList.remove('full-stack');
        stackItemsFull[0].classList.add('empty-stack');
    }
}