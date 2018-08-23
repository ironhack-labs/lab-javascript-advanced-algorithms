function QueueDataStructure () {
	this.queueControl = [];
	this.MAX_SIZE = 10;
}

QueueDataStructure.prototype.isEmpty = function(){
	if(this.queueControl.length == 0){
		return true;
	}
	return false;
}
QueueDataStructure.prototype.canEnqueue = function(){
	if(this.queueControl.length >= this.MAX_SIZE){
		return false;
	}
	return true;
}
QueueDataStructure.prototype.enqueue = function(element){
	var position = this.queueControl.length;
	if(position == this.MAX_SIZE){
		return "Queue Overflow";
  }
  if(position == 0){
    this.queueControl[0] = element;
  }else{
		var newArray = [];
		newArray[0] = element;
    for(var i=1;i<=position;i++){
      newArray[i] = this.queueControl[i-1];
    }
	  this.queueControl = newArray;
  }
	return this.queueControl;
}
QueueDataStructure.prototype.dequeue = function(){
	var lastPosition = this.queueControl.length - 1;
	if(lastPosition < 0 ){
		return "Queue Underflow";
	}
	var valToRemove = this.queueControl[lastPosition];
  this.queueControl.splice(lastPosition,1);
	return valToRemove;
}