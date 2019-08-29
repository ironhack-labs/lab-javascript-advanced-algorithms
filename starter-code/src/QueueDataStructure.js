function QueueDataStructure () {

  this.queueControl = [];
  this.MAX_SIZE = 10;

  this.isEmpty = function () {
    return this.queueControl.length == 0;
  }

  this.canEnqueue = function () {
    return this.MAX_SIZE > this.queueControl.length;
  }

  this.enqueue= function (stackEl) {
    if(this.canEnqueue()){
      this.queueControl.unshift(stackEl);
      return this.queueControl;
    } else{
      return "Queue Overflow";
    }   
  }

  this.dequeue = function () {
    if(!this.isEmpty()){
      return this.queueControl.pop();
    }else{
      return "Queue Underflow"
    }
  }
}
