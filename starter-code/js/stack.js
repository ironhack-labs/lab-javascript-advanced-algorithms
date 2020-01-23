let stack = new StackDataStructure();// esto no se que hacia

let inputValueStack = document.getElementById("input").value;
let addStack = document.getElementById("btn-add").addEventListener("click", addItem);
let takeStack = document.getElementById("btn-take").addEventListener("click", takeItem);
let StackedElms, outStack;



function fillStack() {
    
}


function addItem() {

    let canPush = stack.canPush();
    let push = stack.push();

    if (canPush() === true) {
        return push();
    }else {
            return`Stack Overflow`;
        }

}

function takeItem() {
    if (stack.isEmpty() === false) stack.pop();
    return `Stack Underflow`;
}