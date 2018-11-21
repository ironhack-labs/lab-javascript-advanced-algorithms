function QueueDataStructure () {
  let nmxq = 10;
  this.queueControl = []; 
  this.MAX_SIZE = nmxq;
  this.isEmpty = function(){
    let valEmQ =  true;
    return this.queueControl.length === 0 ? valEmQ : false;
  }
  this.canEnqueue = function(){
    let valPuQ = true;
    return this.queueControl.length < this.MAX_SIZE ? valPuQ : false;
  }
  this.enqueue = function(elem){
    if(this.queueControl.length < this.MAX_SIZE){
      this.queueControl.unshift(elem);
      return this.queueControl;
    } else {
      return 'Queue Overflow';
    }
  }
  this.dequeue = function(){
    if(this.queueControl.length === 0){
      return 'Queue Underflow';
    } else {
      return this.queueControl.reverse()[0];
    }
  }
}