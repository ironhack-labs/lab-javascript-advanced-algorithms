var stack = new StackDataStructure ();
var addButtomStack = document.querySelector('#addButtonStack');
var takeButtomStack = document.querySelector('#takeButtonStack');
;

addButtonStack.onclick = () => {
    var datos = document.querySelector('#inputStack').value;
    if (stack.canPush()){
        stack.push(datos);
        console.log(datos);
        for (var i = 0; i < stack.stackControl.length; i++){
            document.querySelector(`#elemStack-${i}`).innerHTML = stack.stackControl[i];
        }    
    }
    else window.alert(stack.push(datos))
}
takeButtonStack.onclick = () => {
    console.log("entra en click")
    if (stack.isEmpty()) window.alert(stack.pop());
    else {
        stack.pop();
        for (var i = 0; i < stack.stackControl.length; i++){
            document.querySelector(`#elemStack-${i}`).innerHTML = stack.stackControl[i];
        }
        for (var i = stack.stackControl.length; i < stack.MAX_SIZE; i++){
            document.querySelector(`#elemStack-${i}`).innerHTML = " ";
        }
    }
}