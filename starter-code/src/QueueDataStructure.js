function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 8;    


QueueDataStructure.prototype.isEmpty = function () {
    if (this.queueControl.length <= 0){
        return true;
      } else {
          return false};
    };

QueueDataStructure.prototype.canEnqueue = function () {
    if (this.queueControl.length < this.MAX_SIZE){
          return true;
    } 
    return false;
      }
    }
    
QueueDataStructure.prototype.enqueue = function (ele) {
    if (this.canEnqueue() == false) {
    return "Queue Overflow"
    }
this.queueControl.unshift(ele);
return this.queueControl;
    }

    
QueueDataStructure.prototype.dequeue = function(ele) {
if (this.isEmpty() ){
return "Queue Underflow"
}
return this.queueControl.pop(ele);
}    
       
