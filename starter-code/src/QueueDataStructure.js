function QueueDataStructure () {
     this.queueControl = [];
     this.MAX_SIZE = 8;
}
QueueDataStructure.prototype.isEmpty = function () {
   if(this.queueControl.length<=0){
     return true;
   }
   return false;
}

QueueDataStructure.prototype.canEnqueue=function(){
     if(this.queueControl.length==this.MAX_SIZE){
          return false;
     }
     return true;
}

QueueDataStructure.prototype.enqueue=function(element){
     if(this.canEnqueue()){
          this.queueControl.unshift(element);
          return this.queueControl;
     }
     return "Queue Overflow";
}

QueueDataStructure.prototype.dequeue=function(){
     if(!this.isEmpty()){
          return this.queueControl.pop();    
     }
     return "Queue Underflow";
}