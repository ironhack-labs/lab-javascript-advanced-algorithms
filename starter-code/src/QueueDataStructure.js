function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 8;
  this.isEmpty = function(){
  return (this.queueControl.length === 0)};


  this.canEnqueue = function(){
    if (this.queueControl.length==this.MAX_SIZE){
    return false;}
    else{return true;}

  };
  this.enqueue = function(i){
    if (this.queueControl.length===this.MAX_SIZE){
      return ("Queue Overflow");}

    else {
      this.queueControl.unshift(i);
      return this.queueControl;}
  };
  this.dequeue = function(){
    if (this.queueControl.length===0){
        return 'Queue Underflow';}
    else{
    var len=this.queueControl.length;
    var last= this.queueControl[len-1];
    return last;}
  };
  

}
