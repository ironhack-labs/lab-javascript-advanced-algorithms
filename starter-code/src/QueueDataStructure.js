function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 8;
    this.isEmpty = ()=>{
        if (this.queueControl.length === 0) {
            return true 
        } else {
            return false
        }
    };
    this.canEnqueue = ()=>{
        if (this.queueControl.length < this.MAX_SIZE) {
            return true 
        } else {
            return false
        }
    };
    this.enqueue = (params)=>{
        if (this.canEnqueue()) {
            this.queueControl.unshift(params);
            return this.queueControl;
          } else {
              alert("Queue Overflow");
            return "Queue Overflow";
          }
        // this.queueControl.unshift(params);
        //     return this.queueControl
    };
    this.dequeue = ()=>{
        if (this.isEmpty()) {
            alert('Queue Underflow');
          return 'Queue Underflow';
        } else {
          return this.queueControl.pop();
        }
        
    };
    

}
