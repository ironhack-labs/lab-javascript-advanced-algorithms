function QueueDataStructure () {
    this.MAX_SIZE=8;
    this.queueControl=[];
   
}
 
QueueDataStructure.prototype.isEmpty = function(){
    if (this.queueControl.length == 0){
      return true;
    }
    return false;
  }
  QueueDataStructure.prototype.canEnqueue = function(){
    if (this.queueControl.length >= this.MAX_SIZE){
      return false;
    }
    return true;
  }
  
  QueueDataStructure.prototype.enqueue=function(e){
   
    if (this.canEnqueue()) {
        this.queueControl.unshift(e);
        return this.queueControl;
     }
     return 'Queue Overflow'
    }
  
    QueueDataStructure.prototype.dequeue = function(e){
  
        if (this.isEmpty()){
            
            return "Queue Underflow";
         }
        
        return this.queueControl.pop(e);
      }