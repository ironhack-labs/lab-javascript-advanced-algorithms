function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE=10;
    this.front = 0;
    this.rear = 0;
}

QueueDataStructure.prototype.isEmpty = function(){
    if(this.queueControl.length == 0){
	return true
    }
    return false
}

QueueDataStructure.prototype.isEmpty = function(){
    if(this.queueControl.length == 0){
	return true
    }else{
	return false
    }
}

QueueDataStructure.prototype.canEnqueue = function(){
    if(this.queueControl.length < this.MAX_SIZE){
	return true
    }   else{
	return false
    }
}

QueueDataStructure.prototype.enqueue = function(element){
    if(this.canEnqueue()){
	this.queueControl[this.rear] = element;
	this.rear = this.rear + 1;
	return this.queueControl.reverse()
    }else{
	return "Queue Overflow"
    }
}

QueueDataStructure.prototype.dequeue = function(){
    if(this.isEmpty()){
	return 'Queue Underflow'
    }else{
	let data = this.queueControl[this.front]
	this.front = this.front + 1
	
	return this.queueControl[this.queueControl.length-1]
    }
	
}





