const stack = new StackDataStructure ();

var addStack = document.querySelector("#addStack");

addStack.onclick = () => {

var inputStack = document.querySelector("#newStack").value;
    let push = stack.push(inputStack);
    
    for (let index = 0; index < stack.stackControl.length; index++) {
        document.querySelector(`#lis${index}`).innerHTML = stack.stackControl[index];
        
        //  debugger
     };
     if (push === "Stack Overflow") {
         alert("Stack Overflow");
     };
    
    // .forEach(element => {
    //     document.getElementById(`lis-${element}`).innerHTML = `${stack.stackControl[element]}`
    //     debugger
    // });
    // for (let index = 0; index < stack.stackControl; index++) {
    //    document.getElementById(`lis-${index}`).innerHTML = `${stack.stackControl[index]}`;
    //     debugger
    // }
    // setTimeout(() => {
    //     alert(stack.stackControl);
    // }, 1000);

};


var stackWarning = document.querySelector("#stackWarning");

stackWarning.onclick = () => {
    let pop = stack.pop();
    let i = stack.stackControl.length;
    document.querySelector(`#lis${i}`).innerHTML = "";
    if (pop === "Stack Underflow") {
        alert("Stack Underflow");
    }

}
