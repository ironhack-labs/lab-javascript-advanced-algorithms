class Stack {
	constructor() {
		this.stackControl = [];
		this.MAX_SIZE = 10;
	}

	canPush() {
		if (this.stackControl.length === this.MAX_SIZE) {
			return false;
		} else {
			return true;
		}
	}

	isEmpty() {
		if (this.stackControl.length === 0) {
			return true;
		} else {
			return false;
		}
	}

	push(item) {
		if (this.canPush()) {
			this.stackControl.push(item);
			return this.stackControl;
		} else {
			// Para que Jasmine esté feliz, descomentar la línea de debajo y comentar el return
			// throw new Error('STACK_OVERFLOW');
			return 'Stack Overflow';
		}
	}

	pop() {
		if (this.isEmpty()) {
			// Para que Jasmine esté feliz, descomentar la línea de debajo y comentar el return
			// throw new Error('STACK_UNDERFLOW');
			return 'Stack Underflow';
		} else {
			return this.stackControl.pop();
		}
	}

	display() {
		return this.stackControl;
	}
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
