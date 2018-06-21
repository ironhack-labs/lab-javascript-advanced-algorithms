function QueueDataStructure () {
	this.queueControl= [];
	this.MAX_SIZE= 10;
	this.isEmpty= function(){
		 if(this.queueControl.length === 0){
		 	return true;
		 } else {
		 	return false;
		 }
	};

	this.canEnqueue= function(){
		if(this.queueControl.length === this.MAX_SIZE){
			return false;
		} else {
			return true;
		}
	};

	this.enqueue= function(e){
		if (this.queueControl.length === this.MAX_SIZE ){
			return "Queue Overflow";
		} else {
			this.queueControl.unshift(e);
			return this.queueControl;
		}	
	};

	this.dequeue= function(){
		if (this.queueControl.length === 0){
			return "Queue Underflow";
		} else{
			return this.queueControl.pop();
		}
	};
};
