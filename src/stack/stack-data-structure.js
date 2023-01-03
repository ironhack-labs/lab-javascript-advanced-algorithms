class Stack {
	constructor() {
		this.stackControl = [];
		this.MAX_SIZE = 10;
	}

	canPush() {
		if (!this.stackControl.length) return true;
		if (this.stackControl.length === this.MAX_SIZE) return false;
	}

	isEmpty() {
		if (!this.stackControl.length) return true;
		if (this.stackControl.length > 0) return false;
	}

	push(item) {
		if (this.canPush()) {
			this.stackControl.push(item);
		}
		if (this.stackControl[this.stackControl.length - 1] === item) return this.stackControl;
		else {
			throw new Error('STACK_OVERFLOW');
		}
	}

	pop() {
		if (!this.isEmpty()) {
			return this.stackControl.pop();
		}
		if (this.isEmpty()) {
			throw new Error('STACK_UNDERFLOW');
		}
	}

	display() {
		// ... your code goes here
	}
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
