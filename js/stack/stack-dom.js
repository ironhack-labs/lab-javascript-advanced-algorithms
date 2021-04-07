const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure()


const clearStackInput = () => {
  stackInput.value = ""
}


const renderListStack = () => {
  for (let i = 0; i < newStack.MAX_SIZE; i++) {
		let liElement = document.createElement("li")
		liElement.classList.add("inactive")
		stackList.appendChild(liElement)
	}
}


renderListStack()


const generateWarningStack = type => {
  if (type === 'underflow') {
    warningBottomStack.style.display = "block"
  } else if (type === 'overflow') {
    warningTopStack.style.display = "block"
  }
}


const cleanWarningStack = () => {
	warningTopStack.style.display = "none"
	warningBottomStack.style.display = "none"
}


const addToStack = () => {
  let liElements = document.getElementsByClassName("inactive")

	if (newStack.canPush()) {
		newStack.push(stackInput.value)
		liElements[0].innerHTML = stackInput.value
		liElements[0].classList.toggle("active")
		liElements[0].classList.toggle("inactive")
		clearStackInput();
	} else {
		generateWarningStack("overflow")
	}

	if (newStack.stackControl.length === 1) cleanWarningStack()
}


const removeFromStack = () => {
  let liElements = document.getElementsByClassName("active")

	if (!newStack.isEmpty()) {
		newStack.pop();
		liElements[liElements.length - 1].innerHTML = ""
		liElements[liElements.length - 1].classList.toggle("inactive")
		liElements[liElements.length - 1].classList.toggle("active")
	} else {
		generateWarningStack("underflow")
	}

	if (newStack.stackControl.length === newStack.MAX_SIZE - 1) cleanWarningStack()
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
