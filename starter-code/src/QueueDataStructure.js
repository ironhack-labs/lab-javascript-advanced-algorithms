function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 8;
  this.reverseQueueControl;
  this.isEmpty = function(){
    return(this.queueControl.lenght === 0);
  };

  this.canEnqueue = function(){
    return(this.queueControl.lenght.MAX_SIZE); 
  };

  this.enqueue = function(element) {
    if (this.canEnqueue()){
      this.queueControl.push(element);
      this.reverseQueueControl = queueControl.reverse();
       return this.reverseQueueControl;
      } else {
     return "Queue Overflow";
  }
};

this.dequeue = function() {
  if(this.isempty()){
    return "Queue Uderflow";
  }else{
    return this.stackControl.pop();
  }
  };

};
