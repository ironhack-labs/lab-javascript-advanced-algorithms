var stack = new StackDataStructure();
var stackButton = document.getElementById('add-stack');
var deleteButton = document.getElementById('delete-stack');
var stackInput = document.getElementById('stackelement');
var slots = document.getElementsByClassName('stack-element');
var lastCleared = document.getElementById('cleared-stack-element')
var slotcounter = slots.length-1


stackButton.onclick = function(){
    stack.push(stackInput.value);
    printStack();
}

deleteButton.onclick = function(){
    if (stack.isEmpty()==true){
        slots[slotcounter].innerHTML = "Stack Underflow";
        slots[slotcounter].style.backgroundColor = "#f7dfe1";
        slots[slotcounter].style.color = "red";
        slots[slotcounter].style.border = "1px solid red"
    } else {
        lastCleared.innerHTML = stack.stackControl[stack.stackControl.length-1];
        stack.pop();
         clearStack();
    }

}


function printStack(){
    
    slots[slotcounter].style.backgroundColor = null;
    slots[slotcounter].style.color = null;
    slots[slotcounter].style.border = null;
    if (stack.canPush() == false){
        slots[0].innerHTML = "Stack Overflow";
        slots[0].style.backgroundColor = "#f7dfe1";
        slots[0].style.color = "red";
        slots[0].style.border = "1px solid red"
    } else {
        for (var i = 0; i<stack.stackControl.length; i++){
            let loc = slotcounter-i;
            slots[loc].innerHTML = stack.stackControl[i];
        }
    }

}

function clearStack(){
    slots[0].innerHTML = null;
    slots[0].style.backgroundColor = null;
    slots[0].style.color = null;
    slots[0].style.border = null;
    let cuantos = stack.stackControl.length;
    slots[slotcounter-cuantos].innerHTML = '';
    
}