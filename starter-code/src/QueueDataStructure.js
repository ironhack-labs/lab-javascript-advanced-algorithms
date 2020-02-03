class QueueDataStructure {
    constructor(){
       this.queueControl = []; 
       this.MAX_SIZE = 10;
    }  
    enqueue(value) {
      if (this.canEnqueue()){
          this.queueControl.unshift(value);
          return this.queueControl;
      } else {
          return "Queue Overflow";
      }
    }
    dequeue() {
      if (!this.isEmpty()) {
         return this.queueControl.pop();
      } else {
         return "Queue Underflow"; 
      }
    }
    canEnqueue(){
      if (this.queueControl.length === this.MAX_SIZE ) {
          return false;
      } else {
          return true;
      }
    }
    isEmpty() {
      if (this.queueControl.length === 0) {
          return true;
      } else {
          return false;
      }
    }
  
  }
