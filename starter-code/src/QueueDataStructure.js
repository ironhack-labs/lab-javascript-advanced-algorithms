function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 5;

  this.isEmpty = function() {
    if (this.queueControl.length==0){
      return true;
    } else {
      return false;
    }
  };

  this.canEnqueue = function(){
    if(this.queueControl.length<this.MAX_SIZE||this.isEmpty()==true){
      return true;
    } else {
      return false;
    }
  };

  this.enqueue = function(e){

    if(this.queueControl.length<this.MAX_SIZE || this.isEmpty()==true){
      this.queueControl.unshift(e);
      return this.queueControl;
    } else {
      return "Queue Overflow";
    }

  };

  this.dequeue = function(){
    if(this.queueControl.length>0){
      return this.queueControl.pop();
    } else {
      return "Queue Underflow";
    }
  };

}
