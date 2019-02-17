function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 10;
  this.isEmpty = function(){
    if (this.queueControl.length === 0){
      return true}
      else{
        return false;
      }
  }
  this.canEnqueue = function(){
    if (this.queueControl.length < this.MAX_SIZE){
      return true
    }
    else{return false;}
  }
  this.enqueue = function(arg){
    if(this.canEnqueue() === true){
      this.queueControl.unshift(arg);
      return(this.queueControl)
    }
    if(this.canEnqueue() === false){return "Queue Overflow"}
  }
  this.dequeue = function(arg){
    if(this.isEmpty() === false){
      return this.queueControl.pop(arg);
    }
    if(this.isEmpty() === true){
      return "Queue Underflow"
    }
  }

}
