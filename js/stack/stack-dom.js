const stackList = document.getElementById("stack-list");
const stackInput = document.getElementById("stack-input");
const container = document.getElementById("container");
const warningTopStack = document.querySelector("#stack-container .warning-top");
const warningBottomStack = document.querySelector("#stack-container .warning-bottom");
const addStackBtn = document.getElementById("add-stack");
const takeStackBtn = document.getElementById("take-stack");

const newStack = new StackDataStructure();

const clearStackInput = () => {
	stackInput.value = "";
};

const renderListStack = () => {
	for (let i = 0; i < newStack.MAX_SIZE; i++) {
		let liElem = document.createElement("li");
		liElem.classList.add("inactive");
		stackList.appendChild(liElem);
	}
};

renderListStack();

const generateWarningStack = (type) => {
	if (type === "underflow") {
		warningBottomStack.style.display = "block";
	} else if (type === "overflow") {
		warningTopStack.style.display = "block";
	}
};

const cleanWarningStack = () => {
	warningTopStack.style.display = "none";
	warningBottomStack.style.display = "none";
};

const addToStack = () => {
	let inactivesLiElem = stackList.getElementsByClassName("inactive");

	if (newStack.canPush()) {
		newStack.push(stackInput.value);
		inactivesLiElem[0].innerHTML = stackInput.value;
		inactivesLiElem[0].classList.toggle("active");
		inactivesLiElem[0].classList.toggle("inactive");
		clearStackInput();
	} else {
		generateWarningStack("overflow");
	}

	if (newStack.stackControl.length === 1) cleanWarningStack();
};

const removeFromStack = () => {
	let activesLiElem = stackList.getElementsByClassName("active");

	if (!newStack.isEmpty()) {
		newStack.pop();
		activesLiElem[activesLiElem.length - 1].innerHTML = "";
		activesLiElem[activesLiElem.length - 1].classList.toggle("inactive");
		activesLiElem[activesLiElem.length - 1].classList.toggle("active");
	} else {
		generateWarningStack("underflow");
	}

	if (newStack.stackControl.length === newStack.MAX_SIZE - 1) cleanWarningStack();
};

addStackBtn.addEventListener("click", addToStack);
takeStackBtn.addEventListener("click", removeFromStack);
