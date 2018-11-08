function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 0;
  this.isEmpty = function(){
    return (this.queueControl.length === 0)
  }
  this.canPush = function(){
    return (this.isEmpty());
  }
  this.push = function(element){
    
    if (this.queueControl.length === this.MAX_SIZE && this.MAX_SIZE !=0) 
    return 'Queue Overflow';
    this.queueControl.push(element);
    return this.queueControl;
  }
  this.pop = function(){
    if (this.queueControl.length === 0) return "QUeue Underflow";
    var index = this.queueControl.length-1
    return this.queueControl.pop(this.queueControl[index]);
  }
}
