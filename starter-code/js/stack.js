let stackData = new StackDataStructure();

// links DOM
let inputStack = document.getElementById("inputdata");
let addBtnStack = document.getElementById("addStack");
let takeBtnStack = document.getElementById("tkStack");
let txtStack = document.getElementById("inputStack");
let celds = document.getElementsByClassName("stackData");
let messageOverFlow = document.getElementById("I");
let messageUnderFlow = document.getElementById("X");

// Links methods-DOM

function addStack() {
    stackData.push(txtStack.value);
    let data = stackData.MAX_SIZE - stackData.stackControl.length;
    celds[data].innerText = txtStack.value;
}

function tkStack() {
    let data = stackData.MAX_SIZE - stackData.stackControl.length - 1;
    celds[data].innerText = "";
}

// Events Linls-buttom
addBtnStack.addEventListener("click", function () {
    if (stackData.canPush()) {
        addStack();
    } else {
        return messageOverFlow.innerText = "Stack Overflow"; //celds.style.backgroundColor = "red");
    }
})

takeBtnStack.addEventListener("click", function () {
    if (stackData.isEmpty()) {
        return messageUnderFlow.innerText = "Stack Underflow"; //celds.style.backgroundColor = "green"
    } else if (stackData.pop()) {
        tkStack();
    }
})