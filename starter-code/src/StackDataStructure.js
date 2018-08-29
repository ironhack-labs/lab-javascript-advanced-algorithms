//LIFO (Last-in First-out)
function StackDataStructure () {
	this.stackControl = [];
	this.MAX_SIZE = 9;
}

StackDataStructure.prototype.isEmpty = function() {
	if (this.stackControl.length === 0) {
		return true;
	} else {
		return false;
	}
}

StackDataStructure.prototype.canPush = function() {
	if (this.stackControl.length < this.MAX_SIZE) {
		return true;
	} else {
		return false;
	}
}

StackDataStructure.prototype.push = function(element) {
	//Last In
	if (this.canPush() === false) {
		return 'Stack Overflow';
	} else {
		this.stackControl.push(element);
		return this.stackControl;
	}	
}

StackDataStructure.prototype.pop = function() {
	//First Out
	if (this.isEmpty()) {
		return 'Stack Underflow';
	}
	return this.stackControl.pop();
}

StackDataStructure.prototype.reset = function() {
	this.stackControl = [];
}


