
var stackAddBtn = document.getElementById('stackAdd');
var stackTakeBtn = document.getElementById('stackTake');
var stackInput = document.getElementById('stackInput');
var stackContainer = document.getElementById('stack-item-container')

var stack = new StackDataStructure();

function clearContainer(container){
    var elements = container.children;
    for(var i = 0; i < elements.length; i++){
        elements[i].className = "";
        elements[i].innerHTML = "";
    }
}

function printStack(arr){
    if(arr == "Stack Overflow"){
        printInPosition(arr, 0, stackContainer);
    } else if (arr.length == 0) {
        clearContainer(stackContainer);
        printInPosition("Stack Underflow", 0, stackContainer);
    } else {
        clearContainer(stackContainer);
        arr.forEach(function(element, i) {
            var position = 8 - i;
            printInPosition(element, position,stackContainer);
        });
    }
}

function printInPosition(element, position, container){
    var selectedItem = container.children[position];
    selectedItem.innerHTML = element;
    if(element){
        if(element.includes("Queue") || element.includes("Stack")){
            selectedItem.className =  "alert";
        } else {
            selectedItem.className =  "full";
        }
    }
}

stackAddBtn.addEventListener('click', function(){
    var inputText = stackInput.value;
    var stackArr = stack.push(inputText);
    stackInput.value = "";

    printStack(stackArr);
});

stackTakeBtn.addEventListener('click', function(){
    var elemRemoved = window.stack.pop();
    var stack = window.stack.stackControl;

    printStack(stack);
})