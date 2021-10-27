const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector(
	'#stack-container .warning-bottom'
);
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new Stack(); // esta utilizando la clase creada en stack-data-structure.js

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
	try {
		newStack.push()
	} catch (error) {
		console.log('stack is full')
	}

	let indexTwo = 1;

	for (let i = 0; i < newStack.stackControl.length; i++) {
		let newItem = stackList.childNodes[indexTwo];
		newItem.classList.remove('inactive');
		newItem.classList.add('active');
		indexTwo += 2
	}
	
	let itemInput = stackList.childNodes[indexTwo - 2];
	if (stackInput.value){
		itemInput.innerHTML = stackInput.value;
		stackInput.value = "";
	}
};



const removeFromStack = () => {
	
	try {
		
		newStack.pop();
	} catch (error) {
		
		warningBottomStack.style.display = 'block';
		warningBottomStack.innerHTML = 'underflow'
	}

	let length = newStack.stackControl.length;
	let lastItem = stackList.childNodes[(length * 2) + 1]

	lastItem.classList.remove('active');
	lastItem.classList.add('inactive');
	lastItem.innerHTML = "";


};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
