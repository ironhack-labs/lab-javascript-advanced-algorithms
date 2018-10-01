function QueueDataStructure () {
  this.queueControl=[];
  this.MAX_SIZE=8;

  this.isEmpty = function(){
    if(this.queueControl.length>0){
      return false;
    } else {
      return true;
    }
  }

  this.canEnqueue = function(){
    if(this.queueControl.length<this.MAX_SIZE){
      return true;
    } else {
      return false;
    }
  }

  this.enqueue = function(e) {
    
    if (this.canEnqueue){
      this.queueControl.unshift(e);
      return this.queueControl;
    } else {
      return "Queue Overflow";
    }
    
    
    
  }

  this.dequeue = function() {
    if(this.isEmpty){
      return "Queue Underflow";
    } else {
      this.queueControl.shift(e);
      return this.queueControl;
    }
  }
}
