// New object class Stack

var stackStructure = new StackDataStructure;

stackStructure.MAX_SIZE = 10;

const container = document.querySelector('.stack');

// Create Div of Stack Size

for (var i = 0; i < stackStructure.MAX_SIZE; i++) {
    element = document.createElement('div');
    element.setAttribute('class','stack-element');
    container.append(element)
}

