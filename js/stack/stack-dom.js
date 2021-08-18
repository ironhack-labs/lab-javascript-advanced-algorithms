const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector(
	'#stack-container .warning-bottom'
);
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new Stack();

const clearStackInput = () => {
	// ... your code goes here
};

const renderListStack = () => {
	// ... your code goes here
};

renderListStack();

const generateWarningStack = (type) => {
	if (type === 'underflow') {
		// ... your code goes here
	} else if (type === 'overflow') {
		// ... your code goes here
	}
};

const addToStack = () => {
	console.log('funciona')

	try {
	 	const hola = newStack.push(stackInput.value)
		const inputValue = stackInput.value
		const element = document.querySelector('.inactive')
		element.innerHTML = inputValue
		element.classList.remove('inactive')
		element.classList.add('active')
	} catch (error) {
		alert('ERROR, STOP!')
		
		
	}
};

const removeFromStack = () => {
	try {		
		
		const element = document.querySelector('.active')
		element.classList.remove('active')
		element.classList.add('inactive')

		
	} catch (error) {
		// there was an underflow error, handle it
	}
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);