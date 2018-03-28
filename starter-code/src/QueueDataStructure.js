function QueueDataStructure () {
  this.queueControl = [null];
  this.MAX_SIZE = 2;

  this.isEmpty = function(){
    if (this.queueControl.length>0){
    return true;
    }
  };

  this.canEnqueue = function(){
    return true;
  };

  this.enqueue = function(){};

  this.dequeue = function(){};

}
