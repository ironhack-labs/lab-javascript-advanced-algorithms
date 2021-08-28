const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');
const maxStackSize = 10;
const newStack = new Stack(maxStackSize);

// const stackMinusAdd = maxStackSize - newStack.display().length;

const clearStackInput = () => {
	// ... your code goes here
	stackInput.value = '';
};

const renderListStack = () => {
	// ... your code goes here
	const stackMinusAdd = maxStackSize - newStack.display().length;
	stackList.innerHTML = '';

	for (let i = 0; i < newStack.display().length; i++) {
		let li = document.createElement('li');
		li.classList = 'active';
		li.innerText = newStack.display()[i];
		stackList.appendChild(li);
	}

	for (let i = 0; i < stackMinusAdd; i++) {
		let li = document.createElement('li');
		li.classList = 'inactive';
		li.innerHTML = '';
		stackList.appendChild(li);
	}
};

renderListStack();

const generateWarningStack = (type) => {
	if (type === 'underflow') {
		// ... your code goes here
		warningBottomStack.style = 'display:block';
	} else if (type === 'overflow') {
		// ... your code goes here
		warningTopStack.style = 'display:block';
	}
};

const addToStack = () => {
	try {
		// ... your code goes here
		newStack.push(stackInput.value);
	} catch (error) {
		// there was an overflow error, handle it
		generateWarningStack('overflow');
		warningTopStack.innerHTML = 'STACK_OVERFLOW';
	}
	clearStackInput();
	renderListStack();
	warningBottomStack.style = 'display:none';
};

const removeFromStack = () => {
	try {
		// ... your code goes here
		newStack.pop();
	} catch (error) {
		// there was an underflow error, handle it
		generateWarningStack('underflow');
		warningBottomStack.innerHTML = `STACK_UNDERFLOW`;
	}
	clearStackInput();
	renderListStack();
	warningTopStack.style = 'display:none';
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
