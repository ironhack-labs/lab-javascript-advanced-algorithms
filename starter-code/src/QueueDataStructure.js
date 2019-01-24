function QueueDataStructure () {
    this.queueControl = []
    this.MAX_SIZE = 10
// var x = 100;
// x.MAX_VALUE;
	this.isEmpty = function (){
		 if(this.queueControl.length === 0) {
		 	return true
		 } else {
		 	return false
		 }
	}

	this.canEnqueue = function (){
		if(this.queueControl.length === this.MAX_SIZE) {
			return false
		} else {
			return true
		}
	}

	this.enqueue = function(el){
		if (this.queueControl.length === this.MAX_SIZE ) {
			return "Queue Overflow"
		} else {
			this.queueControl.unshift (el)
			return this.queueControl
		}	
    }
    // while (!canEnque.isEmpty()) {
    //   (.dequeue());
    // }

	this.dequeue = function(){
		if (this.queueControl.length === 0) {
			return "Queue Underflow"
		} else {
			return this.queueControl.pop ()
		}
	}
}
//arr.pop()