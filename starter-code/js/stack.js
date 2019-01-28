var stack = new StackDataStructure();

stack.MAX_SIZE = 10;
stack.stackControl = [];

var stackDiv = document.getElementById('containerLifo');

var newElement = document.createElement('div');
newElement.setAttribute('class', 'element');

stackDiv.innerHTML = newElement.outerHTML.repeat(stack.MAX_SIZE);

var inElement = document.querySelector('#inputElement');
var elementAdd = document.querySelector('#buttonAdd');
var elementTake = document.querySelector('#buttonTake');
var elementToken = document.querySelector('#elementToken');
var allElements = document.querySelectorAll('.element');

elementAdd.onclick = function() {
	if (stack.canPush()) {
		stack.push(inElement.value);
		let index = stack.MAX_SIZE - stack.stackControl.length;
		allElements[index].innerHTML = inElement.value;
		allElements[index].setAttribute('class', 'elementIn');
		inElement.value = '';
	} else {
		console.log('la pila está llena');
	}
};

elementTake.onclick = function() {
	if (!stack.isEmpty()) {
		let index = stack.MAX_SIZE - stack.stackControl.length;
		elementToken.innerHTML = allElements[index].innerHTML;
		allElements[index].innerHTML = '';
		allElements[index].setAttribute('class', 'element');

		stack.pop();
	} else {
		console.log('la pila está vacía');
	}
};
