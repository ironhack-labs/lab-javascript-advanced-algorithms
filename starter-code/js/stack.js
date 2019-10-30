let stack = new StackDataStructure;
let stackListDOMEl = document.querySelector("#stack-list");

function paintStack(stack) {
    stackListDOMEl.innerHTML = "";
    let max = stack.MAX_SIZE;
    let storedItems = stack.getArray().length;
    let emptySpaces = max - storedItems;
    for (let i = 1; i <= emptySpaces; i++) {
        let li = document.createElement(`li`);
        li.innerText = `EMPTY`;
        stackListDOMEl.appendChild(li);
    }
    for (let i = storedItems - 1; i >= 0; i--) {
        let li = document.createElement(`li`);
        li.innerText = `${stack.getArray()[i]}`;
        stackListDOMEl.appendChild(li);
    }
}

paintStack(stack);
    

let btnAddStackEl = document.querySelector(`.btn.stack`);
let btnRemoveStackEl = document.querySelector(`.btn.stack.take`);
let overflowWarn = document.querySelector(`.col.stack>h3.overflow`);
let underflowWarn = document.querySelector(`.col.stack>h3.underflow`);
let stackNewElement = document.querySelector(`#stack-form>input`);

btnAddStackEl.onclick = (function () {
    underflowWarn.className = `btn hidden underflow`;
    if (!stack.canPush()) {
        overflowWarn.className = `btn overflow`;
    } else {
        stack.push(stackNewElement.value);
        paintStack(stack);
    }
    stackNewElement.value = ``;
});

btnRemoveStackEl.onclick = (function () {
    overflowWarn.className = `btn hidden overflow`;
    if (stack.isEmpty()) {
        underflowWarn.className = `btn underflow`;
    } else {
        stack.pop();
        paintStack(stack);
    }
    stackNewElement.value = ``;
});