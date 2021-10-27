class Stack {
	constructor() {
		this.stackControl = [];
		this.MAX_SIZE = 10;
	}

	canPush() {

		if (this.stackControl.length >= this.MAX_SIZE){
			return false;
		}

		return true
	}

	isEmpty() {

		if (this.stackControl.length === 0) {
			return true;
		}

		return false;
	}

	push(item) {
		if ( this.canPush() ===false){
			throw new Error('STACK_OVERFLOW');
		}
		
		this.stackControl.push(item)
		return this.stackControl;
	}

	pop() {
		if (this.isEmpty() === true) {
			throw new Error('STACK_UNDERFLOW');
		}

		let lastItem =  this.stackControl.pop();

		return lastItem;
	}

	display() {
		return this.stackControl
	}
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
