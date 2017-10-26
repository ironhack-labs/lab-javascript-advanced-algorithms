function QueueDataStructure () {

this.queueControl = [];
this.MAX_SIZE = 10;
};

QueueDataStructure.prototype.isEmpty = function() {
if(this.length>0){
  return false;
  }

  else if(this.length==0) {
    return true;
  }

};

QueueDataStructure.prototype.canEnqueue = function() {
    return true;
    if(this.QueueDataStructure.length==10){
      return false
    };

    QueueDataStructure.prototype.enqueue = function() {
      this.queueControl.enqueue();
      this.prototype.isEmpty();
      return this.queueControl;

    };


    QueueDataStructure.prototype.dequeue = function() {
      return "Queue Underflow";

    };









}
