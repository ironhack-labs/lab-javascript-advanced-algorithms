function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE= 55;
    this.enqueue = function(item) {
      if (this.canEnqueue()==false) {
        return "Queue Overflow"};
      this.queueControl.unshift(item);
      return this.queueControl;
    }.bind(this);
    this.dequeue = function(){
      if (this.isEmpty()==true){
      return "Queue Underflow"};
      return this.queueControl.pop();
    }.bind(this);
    
    this.canEnqueue = function() {
      if (this.queueControl.length==this.MAX_SIZE){
        return false;
      } else {return true};
    }.bind(this);
    this.isEmpty = function() {
      return this.queueControl.length == 0;
    }
  
  }

