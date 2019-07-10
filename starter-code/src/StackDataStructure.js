class StackDataStructure {
	constructor() {
		this.stackControl = []
		this.MAX_SIZE = 8
	}

	isEmpty() {
		return !this.stackControl.length ? true : false
	}

	canPush() {
		return this.stackControl.length < this.MAX_SIZE
	}

	push(elm) {
		if (this.canPush()) {
			this.stackControl.push(elm)
			return this.stackControl
		} else return 'Stack Overflow'
	}

	pop() {
		if (this.isEmpty()) return 'Stack Underflow'
		else {
			let aux = this.stackControl[this.stackControl.length - 1]
			this.stackControl.pop()
			return aux
		}
	}
}
