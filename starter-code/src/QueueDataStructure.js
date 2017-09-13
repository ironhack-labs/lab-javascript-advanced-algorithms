//  it ("Should return 'Stack Overflow' if the stack is full", function ()
//---------------------"Queue Overflow"----------------------------------
//There is a typo in DataStructuresSpec.js line 166

function QueueDataStructure () {
  this.queueControl=[];
  this.MAX_SIZE=20;

  this.isEmpty=function(){
    if(this.queueControl.length===0){
      return true;
    } else {
      return false;
    }
  };

  this.canEnqueue=function(){
      if(this.queueControl.length===this.MAX_SIZE){
        return false;
      } else {
        return true;
      }
    };

    this.enqueue=function(newElement){
      if (this.queueControl.length===this.MAX_SIZE){
        return 'Queue Overflow';
      }
      this.queueControl.unshift(newElement);
      return this.queueControl;
    };

    this.dequeue=function(){
      if(this.queueControl.length===0){
        return 'Queue Underflow';
      }
      var last = this.queueControl[this.queueControl.length-1];
      this.queueControl.pop();
      return last;
    };

}
