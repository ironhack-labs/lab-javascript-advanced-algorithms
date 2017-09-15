var StackDataStructure = function () {
	this.stackControl = [];
	this.MAX_SIZE = 10;
}

StackDataStructure.prototype.isEmpty = function() {
		if (this.stackControl.length === 0)
			return true
		return false
	}

StackDataStructure.prototype.canPush = function() {
		if (this.stackControl.length < this.MAX_SIZE)
			return true
		return false
	}

StackDataStructure.prototype.push = function(arg) {
		this.stackControl.push(arg)
		if (this.stackControl.length > this.MAX_SIZE) {
			this.pop(arg)
			return "Stack Overflow"
		}
		return this.stackControl.slice((this.stackControl.length-1),1)
	}

StackDataStructure.prototype.pop = function() {
		if (this.stackControl.length === 0)
			return "Stack Underflow"
		return 	this.stackControl.pop()


	}





