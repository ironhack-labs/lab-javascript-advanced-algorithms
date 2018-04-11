function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 10;
  
  this.isEmpty = function(){
    if(this.queueControl.length === 0){
      return true
    }else{
      return false
    }
  }
  this.canEnqueue = function(){
    if(this.queueControl.length < this.MAX_SIZE){
      return true
    }else{
      return false
    }
  }
  this.enqueue = function(element){
    if(this.canEnqueue()){
      this.queueControl.unshift(element);
      return this.queueControl;
    }
  }
  this.dequeue = function(){
    return this.queueControl.pop()
  }
}
