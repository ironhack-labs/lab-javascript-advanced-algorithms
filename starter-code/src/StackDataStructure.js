function StackDataStructure () {
	this.stackControl = [];
	this.MAX_SIZE = 10;
}

StackDataStructure.prototype.isEmpty = function(){
	if(this.stackControl.length < 1){
		return true;
	}
	return false;
}

StackDataStructure.prototype.canPush = function(){
	if(this.stackControl.length >= this.MAX_SIZE){
		return false;
	}
	return true;
}

StackDataStructure.prototype.push = function(element){
	var position = this.stackControl.length;
	if(position == this.MAX_SIZE){
		return "Stack Overflow";
	}
	this.stackControl[position] = element;
	return this.stackControl;
}

StackDataStructure.prototype.pop = function(){
	var lastPosition = this.stackControl.length - 1;
	if(lastPosition < 0 ){
		return "Stack Underflow";
	}
  var valToRemove = this.stackControl[lastPosition];
  this.stackControl.splice(lastPosition,1);
	return valToRemove;
}