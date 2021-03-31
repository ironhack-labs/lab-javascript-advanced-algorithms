const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
	stackInput.value = "";
};

const renderListStack = () => {
	stackList.innerHTML = "";
	newStack.stackControl.forEach(elem => {
		let listItem = document.createElement("li");
		let text = document.createTextNode(elem);

		listItem.appendChild(text);
		stackList.appendChild(listItem);
	})
};

renderListStack();

const generateWarningStack = type => {
	if (type === 'underflow') {
		warningBottomStack.innerHTML = "Underflow";
		warningBottomStack.style = "display: block";
	} else if (type === 'overflow') {
		warningTopStack.innerHTML = "Overflow";
		warningTopStack.style = "display: block";
	}
};

const addToStack = () => {
	let result = newStack.push(stackInput.value);
	if (result === "Stack Overflow") {
		generateWarningStack("overflow");
	} else {
		warningBottomStack.style = "display: none";
	}

	renderListStack();
	clearStackInput();
};

const removeFromStack = () => {
	let result = newStack.pop();
	if (result === "Stack Underflow") {
		generateWarningStack("underflow");
	} else {
		warningTopStack.style = "display: none";
	}

	renderListStack();
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);