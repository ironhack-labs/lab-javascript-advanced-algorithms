
btnAdd = document.getElementById("add");
btnTake = document.getElementById("take");
stack1 = new StackDataStructure()
stack1=getStackedStack();

btnAdd.onclick = function() {

    let pushBack=stack1.push(document.getElementById("stack-input").value);

    typeof pushBack === "string" ? alert(pushBack) : displayStack(stack1);

}

btnTake.onclick = function() {

    let takeBack = stack1.pop(document.getElementById("stack-input").value);

    takeBack === 'Stack Underflow' ? alert(takeBack) : displayStack(stack1);

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
        if (i<stack1.stackControl.length) {
            elems[elems.length-1-i].textContent=stack1.stackControl[i];
        }
        else {elems[elems.length-1-i].textContent=""}
    }

}

