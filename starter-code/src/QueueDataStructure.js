class QueueDataStructure {
    constructor() {
      this.queueControl = [];
      this.MAX_SIZE = 8;
    }
    isEmpty() {
      if (this.queueControl.length === 0) {
        return true;
      } else {
        return false;
      }
    }
    canPush() {
      if (this.queueControl.length === this.MAX_SIZE) {
        return false;
      } else {
        return true;
      }
    }
    canEnqueue(){
        if (this.queueControl.length === this.MAX_SIZE) {
            return false;
          } else {
            return true;
          } 
    }
    enqueue(data) {
      if (this.queueControl.length === this.MAX_SIZE) {
        return "Queue Overflow";
      } else {
        this.queueControl.unshift(data);
      }
      return this.queueControl;
    }
    dequeue() {
      if (this.queueControl.length === 0) {
        return "Queue Underflow";
      } else {
        return this.queueControl.pop();
      }
    }
  }
  