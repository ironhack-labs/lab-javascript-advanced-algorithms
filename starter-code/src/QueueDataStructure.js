class QueueDataStructure {
    constructor(){
      this.queueControl = [];
      this.MAX_SIZE = 10;
    }
    isEmpty() {
      if(this.queueControl.length!==0) {
        return false;
      } else {
        return true;
      }
    }
    canEnqueue() {
      if(this.queueControl.length < this.MAX_SIZE){
        return true;
      } else {
        return false;
      }
    }
    // push(item)
    enqueue(element){
      if(this.queueControl.length < this.MAX_SIZE){
        this.queueControl.push(element);
        return this.queueControl;
      } else {
        return "Queue Overflow";
      }
    }
   // pop()
    dequeue(){
      if (this.queueControl.length !== 0) {
        return this.queueControl.shift();
      } else {
        return 'Queue Underflow';
      }
    }
   }
   
   