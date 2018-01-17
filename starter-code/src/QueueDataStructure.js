function QueueDataStructure () {
  this.queueControl=[];
  this.MAX_SIZE=10;
  
  //isEmpty function
  this.isEmpty=function(){
    if (this.queueControl.length===0)
    {return true}
    else {return false } 
  };
  
  //canPush function
  this.canEnqueue = function(){
    if (this.queueControl.length < this.MAX_SIZE){
      return true
    }
    else {
      return false 
    }
  };
  
  //push function
  this.enqueue=function(number){
    if (this.canEnqueue()===false) {
      return 'Queue Overflow'
    }
    else {
      this.queueControl.unshift(number);
      return this.queueControl
    }
   
  };
  
  //pop function
  this.dequeue=function(){
    if  (this.isEmpty())
     { return ('Queue Underflow')
    }
    else {
      return this.queueControl[this.queueControl.length-1];
      // this.queueControl=this.queue.slice(0,this.queueControl.length-1);
    }
  
  };
  
}
