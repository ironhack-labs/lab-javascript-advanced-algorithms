class QueueDataStructure {
	constructor() {
		this.queueControl = []
		this.MAX_SIZE = 8
	}

	isEmpty() {
		return !this.queueControl.length ? true : false
	}

	canEnqueue() {
		return this.queueControl.length < this.MAX_SIZE
	}

	enqueue(elm) {
		if (this.canEnqueue()) {
			this.queueControl.unshift(elm)
			return this.queueControl
		} else return 'Queue Overflow'
	}

	dequeue() {
		if (this.isEmpty()) return 'Queue Underflow'
		else {
			let aux = this.queueControl[this.queueControl.length - 1]
			this.queueControl.pop()
			return aux
		}
	}
}
