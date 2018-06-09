function StackDataStructure() {
	// init size and storage array
	this.MAX_SIZE = 8;
	this.stackControl = [];

	// check if stack is empty
	this.isEmpty = () => this.stackControl.length === 0;
	// check if stack can accept elements
	this.canPush = () => this.stackControl.length < this.MAX_SIZE;

	// push data into the stack, return `Stack Overflow` is stack is full
	this.push = data => {
		if (!this.canPush()) return `Stack Overflow`;
		else {
			this.stackControl.push(data);
			return this.stackControl;
		}
	};

	// Pop data from the stack, return `Stack Underflow` if stack is empty
	this.pop = () => {
		if (this.stackControl.length === 0) return `Stack Underflow`;
		else return this.stackControl.pop();
	};
}
