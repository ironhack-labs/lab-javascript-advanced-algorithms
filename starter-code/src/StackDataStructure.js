function StackDataStructure() {
	this.stackControl = [];
	this.MAX_SIZE = 10;
	var undo = [];
}

//Constructor's Methods


StackDataStructure.prototype.push = function (arg) {
	if (this.canPush()) {
		this.stackControl.push(arg);
		return this.stackControl;
	}
	return 'Stack Overflow';
};
StackDataStructure.prototype.canPush = function () {
	return (this.stackControl.length + 1 <= this.MAX_SIZE);
};

StackDataStructure.prototype.pop = function () {
	if (this.stackControl.length > 0)
		return this.stackControl.pop();
	return 'Stack Underflow'
};
StackDataStructure.prototype.isEmpty = function () {
	return (this.stackControl.length === 0);
};