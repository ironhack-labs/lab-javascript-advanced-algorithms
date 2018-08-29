//LIFO (Last-in First-out)
var StackDataStructure = function () {
	this.stackControl = [];
	this.MAX_SIZE = 8;
}


StackDataStructure.prototype.push = function(element) {
	//Always to add to the end fo the array
	this.stackControl.push(element);
	return this.maxNumberOfItems;
}

StackDataStructure.prototype.pop = function() {
	//Always remove the lastElement inserted
	this.stackControl.splice[-1];
}

StackDataStructure.prototype.isEmpty = function() {
	if (this.stackControl.length === 0){
		return true;
	}
}

StackDataStructure.prototype.canPush = function() {
	if (this.stackControl.length < this.MAX_SIZE){
		return true;
	}
	return false;
}