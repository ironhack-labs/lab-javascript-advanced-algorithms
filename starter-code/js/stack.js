const stack = new StackDataStructure ();
const addBtn = document.querySelector ('#addBtn');
const takeBtn = document.querySelector ('#takeBtn');

addBtn.onclick = () => {
    let element = document.querySelector ('#input-stack').value;
    if  (stack.canPush ()){
        stack.push(element);
        console.log (element);
        for (let i = 0; i < stack.stackControl.length; i ++) {
            document.querySelector (`#stackElem-${i}`).innerHTML = stack.stackControl[i];
        }
    }
    else {
        window.alert(stack.push(element));
    }
}

takeBtn.onclick = () => {
    if (stack.isEmpty()) {
        window.alert(stack.pop());
    }
    else {
        stack.pop();
        for (let i = 0; i < stack.stackControl.length; i ++) {
        document.querySelector (`#stackElem-${i}`).innerHTML = stack.stackControl[i];
        }
        for (let i =  stack.stackControl.length; i < stack.MAX_SIZE; i ++ ) {
            document.querySelector(`#stackElem-${i}`).innerHTML = " ";
        }
    }
}
