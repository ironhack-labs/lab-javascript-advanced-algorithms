class StackDataStructure {
	constructor() {
		(this.stackControl = []), (this.MAX_SIZE = 8);
	}

	isEmpty() {
		if (this.stackControl.length > 0) {
			return false;
		} else {
			return true;
		}
	}

	canPush() {
		if (this.stackControl.length === this.MAX_SIZE) {
			return false;
		} else {
			return true;
		}
	}

	push(x) {
		if (this.canPush()) {
			this.stackControl.push(x);
			return this.stackControl;
		} else {
			return 'Stack Overflow';
		}
	}

	pop(x) {
		if (this.isEmpty()) {
			return 'Stack Underflow';
		} else {
			return this.stackControl.pop();
		}
	}
}
