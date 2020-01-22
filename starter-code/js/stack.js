let stack = new StackDataStructure();

printList();

let addStack = document.getElementById("add").addEventListener("click", addItem);
let takeStack = document.getElementById("take").addEventListener("click", takeItem);
let valueStackInput = '';
let stackItemsEmpty = '';
let stackItemsFull = '';

function printList() {

    let stackDOMEl = document.querySelector('.stack');
    let stackItem = '';

    for (i = 0; i < stack.MAX_SIZE; i++) {
        stackItem = document.createElement('li');
        stackItem.classList.add('empty');
        // row.className.add('row')
        stackDOMEl.appendChild(stackItem);
    }
}

function addItem() {
    valueStackInput = document.querySelector('.input-lg').value;
    if (valueStackInput == ''){
        alert("Debes ingresar una cantidad")
    } else {
        if (stack.canPush()) {
            stackItemsEmpty = document.querySelectorAll('.empty');
            stackItemsEmpty[stackItemsEmpty.length - 1].innerHTML = valueStackInput;
            stackItemsEmpty[stackItemsEmpty.length - 1].classList.remove('empty');
            stackItemsEmpty[stackItemsEmpty.length - 1].classList.add('full');
            stackItemsEmpty[stackItemsEmpty.length - 1].classList.add('list-group-item');
            stack.push(valueStackInput);
        } else {
            alert("No se puede ingresar mas elementos");
        }
    }

    
}

function takeItem() {
    if(stack.pop()){
        alert("No puedes sacar mas elementos")
    } else {
        stackItemsFull = document.querySelectorAll('.full');
        stackItemsFull[0].innerHTML = '';
        stackItemsFull[0].classList.remove('full');
        stackItemsFull[0].classList.add('empty');
    }
}