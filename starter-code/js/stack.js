
btnAdd = document.getElementById("add");
btnTake = document.getElementById("take");

btnAdd.onclick = function() {
    stackInitial = new StackDataStructure();
    stackInitial=getStackedStack();

    let stackFinal = stackInitial.push(document.getElementById("stack-input").value);

    if (typeof stackFinal === "string") {
        alert(stackFinal)
    }
    else {displayStack(stackInitial);}
}

btnTake.onclick = function() {
    stackInitial = new StackDataStructure();
    stackInitial=getStackedStack();

    let stackFinal = stackInitial.pop(document.getElementById("stack-input").value);

    if (stackFinal === 'Stack Underflow') {
        alert(stackFinal)
    }
    else {
        stackInitial.stackControl.pop();
        displayStack(stackInitial);
    }
}

function getStackedStack() {
    
    stackedArray = [];
    let elems=document.getElementsByClassName("element");

    for (let i=elems.length-1; i>=0;i--) {
        if (elems[i].textContent!="") {stackedArray.push(elems[i].textContent);}
    }

    stackAdd = new StackDataStructure();
    stackAdd.MAX_SIZE=elems.length;
    stackAdd.stackControl=stackedArray

    return stackAdd

}

function displayStack(stack) {
    
    let elems=document.getElementsByClassName("element");
    
    for (let i=0 ;i<elems.length ;i++) {
        if (i<stack.stackControl.length) {
            elems[elems.length-1-i].textContent=stack.stackControl[i];
        }
        else {elems[elems.length-1-i].textContent=""}
    }

}

