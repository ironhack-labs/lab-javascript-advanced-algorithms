class StackDataStructure {
    stackControl = []
    MAX_SIZE = 10
    isEmpty() {
        if (this.stackControl.length > 0) {
            return false
        } else {
            return true
        }
    }
    canPush() {
        if (this.stackControl.length == this.MAX_SIZE) {
            return false
        } else {
            return true
        }
    }
    push(num) {
        if (this.canPush() == true) {
            this.stackControl.push(num)
            return this.stackControl
        } else {
            return 'Stack Overflow'
        }
    }
    pop() {
        if (this.stackControl.length == 0) {
            return 'Stack Underflow'
        } else {
            return this.stackControl.pop()
        }
    }
}

let newStack = new StackDataStructure();
let myArray = document.querySelectorAll(".stackBox")

document.getElementById("addStack").addEventListener('click', addStackFunction)
function addStackFunction() {
    let newElement = document.getElementById("inputStack").value;
    newStack.push(newElement);
    document.getElementById('inputStack').value = "";
    for (let index = 0; index < newStack.stackControl.length; index++) {
        myArray[9-index].innerHTML = newStack.stackControl[index];
    }
}

document.getElementById("takeStack").addEventListener('click', takeStackFunction)
function takeStackFunction() {
    newStack.pop();
    let i = newStack.stackControl.length
    myArray[9-i].innerHTML = ""
}