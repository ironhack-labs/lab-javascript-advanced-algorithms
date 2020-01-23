let stackData = new StackDataStructure();
let stackAdd = document.getElementById('addstack');
let stackTake = document.getElementById('takestack');
let stackArray = document.getElementById('stackArray');
let ol = document.getElementById('stacklist');


stackAdd.addEventListener('click', function () {


    console.log(stackArray.value)
    stackData.push(stackArray.value);
    console.log(stackData.stackControl)
    let newStack = document.createElement('li');

    if (stackData.stackControl.length < 10) {
        ol.appendChild(newStack);
        newStack.innerHTML = `${stackArray.value}`
        console.log(stackData.stackControl.length)
    } else if (stackData.stackControl.length = 10) {
        newStack.innerHTML = `Stack Overflow`
        ol.appendChild(newStack);
    }





});

stackTake.addEventListener('click', function () {

    stackData.pop();
    console.log(stackData.stackControl)
    toErase = stackData.stackControl.length;

    if (stackData.stackControl.length > 0) {
        //ol.appendChild(newStack);
        ol.removeChild(ol.childNodes[toErase]);
        //newStack.innerHTML = `${stackArray.value}`
        console.log(stackData.stackControl.length)
    } else if (stackData.stackControl.length = 0) {
        newStack.innerHTML = `Stack Underflow`
        ol.removeChild(ol.childNodes[toErase]);
    }



});