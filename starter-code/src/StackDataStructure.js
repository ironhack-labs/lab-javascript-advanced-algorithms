function StackDataStructure () {
	this.stackControl = [];
	this.MAX_SIZE = 20;

}

StackDataStructure.prototype.isEmpty = function() {

	if (this.stackControl.length === 0) {
		return true;
	} 
	else {
		return false;
	}
}

StackDataStructure.prototype.canPush = function() {
	if (this.stackControl.length < this.MAX_SIZE) {
		return true;
	}

	else {
		return false;
	}
}

StackDataStructure.prototype.push = function(elem) {
	this.stackControl.push(elem);
	if (this.stackControl.length < this.MAX_SIZE) { 
		return this.stackControl;
	}

	else {
		return "Stack Overflow";
	}

	

}

StackDataStructure.prototype.pop = function(){

	 if (this.stackControl.length === 0) {
 		return "Stack Underflow";
 	 }

	else {
		return this.stackControl.pop();
	}
}


