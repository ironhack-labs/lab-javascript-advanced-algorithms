
class QueueDataStructure{
  constructor () {
    this.queueControl= [];
    this.MAX_SIZE = 10;
  }
  isEmpty () {
    this.emptry = 0;
    if(this.queueControl.length === this.emptry){
      
      return true
    }
    else{
      return false
    }
  }
  canEnqueue () {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true;
    } 
    else {
      return false
    }
  }
  
  dequeue(num) {
    console.log(this.queueControl)
      if (!this.isEmpty()){
        return  this.queueControl.pop(num)
      }else{
        return 'Queue Underflow'
      }
    }
    

   
  
  enqueue(num) {
    console.log(this.queueControl)
    if (this.canEnqueue()){
      this.queueControl.unshift(num);
      return this.queueControl
    }
    else {
      return "Queue Overflow"
    }
  }
}