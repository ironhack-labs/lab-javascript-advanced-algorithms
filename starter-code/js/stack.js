stack = new StackDataStructure()
queue = new QueueDataStructure()

var stackArray = document.querySelector(".stack")

var stackElement

stack.array.forEach(function(element, index) {
    stackElement = document.createElement("div").appendChild(document.createTextNode(element[index]))
    stackArray.replaceChild(stackElement)
}); 