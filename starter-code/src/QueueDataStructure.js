function QueueDataStructure () {

    this.queueControl = [];
  
  this.MAX_SIZE = 10;

  QueueDataStructure.prototype.isEmpty = function(element){
      if (this.queueControl.length == 0){
        // 
       return true
      } else {
     return false
      }
        
  };
  QueueDataStructure.prototype.canEnqueue = function(element){
        if (this.queueControl.length !== this.MAX_SIZE){
      
        return true
        } else {
            return false
        }
        
  };

  QueueDataStructure.prototype.dequeue = function(element){
     
    if (this.isEmpty == false){
        return this.queueControl.shift(element);
    } else {
        return "Queue Underflow";
    }
    
};

QueueDataStructure.prototype.enqueue = function(element){
    if (this.canEnqueue == true){
        
    return this.queueControl.push(element)
    } else {
        return "Queue Overflow";
    }
    
};

}


