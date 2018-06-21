function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 10;

  this.isEmpty = function(){
    var result = this.queueControl.length === 0 ? true : false;
    return result;
  }

  this.canEnqueue = function(){
    var result = this.queueControl.length === this.MAX_SIZE ? false : true;
    return result;
  }

  this.enqueue = function(element){
    if(this.canEnqueue()){
      this.queueControl.unshift(element);
      return this.queueControl;
    } else {
      return 'Queue Overflow';
    }
  }

  this.dequeue = function(){
    if(this.isEmpty()){
      return 'Queue Underflow';
    } else {
      var ultimo = this.queueControl.pop();
      return ultimo;
    }
  }
}
