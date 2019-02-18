function QueueDataStructure () {
 
  this.queeControl = [];
  this.Max_size = 10;
};

  QueueDataStructure.prototype.isEmpty = function () {
      if (this.queueControl.length == 0){
          return true
      } else{
          return false
      }
  };

  QueueDataStructure.prototype.canEnqueue = function() {
    if (this.queueControl.length < this.Max_size){
        return true
    } else {
        return false
    }
  };

  QueueDataStructure.prototype.enqueue = function (element){
      if(this.canEnqueue()){
          this.queeControl.unshift(element);
          return this.queeControl;
      } else {
          return 'Queue Overflow'
      }
  };

  QueueDataStructure.prototype.dequeue = function (){
      if(this.isEmpty()){
          return 'Queue Underflow'
      } else {
          return this.queeControl.pop()
      }
  };

