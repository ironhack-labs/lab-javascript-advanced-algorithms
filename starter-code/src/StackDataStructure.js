function StackDataStructure (stack) {
	this.stackControl = [];
	this.MAX_SIZE = 3;
}
StackDataStructure.prototype.isEmpty = function (){
	if (this.stackControl == 0){
		return true;
	}
	else{
		return false;
	}
}
StackDataStructure.prototype.canPush = function (){
	if (this.stackControl.length < this.MAX_SIZE){
		return true;
	}else{
		return false;
	}
}
StackDataStructure.prototype.push = function (a){
	this.stackControl.push(a);
	
	if(this.stackControl.length > this.MAX_SIZE){
		return "Stack Overflow";
	}

	return this.stackControl;
}
StackDataStructure.prototype.pop = function (){
	if (this.stackControl.length == 0){
		return "Stack Underflow";
	}
	else{
		return this.stackControl.pop();
	}	
}