class QueueDataStructure {
    constructor() {
      this.queueControl = [];
      this.MAX_SIZE = 9;
    }
  
    isEmpty() {
      if (this.queueControl == "") {
        return true;
      } else {
        return false;
      }
    }
  
    canEnqueue() {
      if (this.queueControl.length === this.MAX_SIZE) {
        return false;
      } else {
        return true;
      }
    }
  
    enqueue(newElem) {
      if (this.queueControl.length === this.MAX_SIZE) {
        return "Queue Overflow";
      }
      this.queueControl.push(newElem);
  
      return this.queueControl.reverse();
    }
  
    dequeue(eElem) {
      if (this.queueControl.length === 0) {
          return "Queue Underflow";
        }
  
        let last = this.queueControl.pop(eElem);
    
        return last;
    }
  }


// function QueueDataStructure () {
// }
