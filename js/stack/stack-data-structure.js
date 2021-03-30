class StackDataStructure {
	constructor() {
		this.stackControl = [];
		this.MAX_SIZE = 10;
	}

	canPush() {
		return this.stackControl.length === this.MAX_SIZE ? false : true;
	}

	display() {
		// ... your code goes here
	}

	isEmpty() {
		return this.stackControl.length === 0 ? true : false;
	}

	push(item) {
		if (!this.canPush()) return "Stack Overflow";
		this.stackControl.push(item);
		return this.stackControl;
	}

	pop() {
		if (this.isEmpty()) return "Stack Underflow";
		return this.stackControl.pop();
	}
}
