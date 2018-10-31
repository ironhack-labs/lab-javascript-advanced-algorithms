function QueueDataStructure () {

    this.queueControl = [];
  
  this.MAX_SIZE = 10;

  QueueDataStructure.prototype.isEmpty = function(element){
      if (this.queueControl.length == 0){
        // "Queue Underflow";
       return true
      } else {
     return false
      }
        
  };
  QueueDataStructure.prototype.canEnqueue = function(element){
        if (this.queueControl.length !== this.MAX_SIZE){
        //    "Queue Overflow"
        return true
        } else {
            return false
        }
        
  };

  QueueDataStructure.prototype.dequeue = function(element){
    if (this.queueControl.length == this.MAX_SIZE){
   
    return true
    } else {
        return false
    }
    
};


}


