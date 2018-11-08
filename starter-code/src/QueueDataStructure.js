class QueueDataStructure {

  constructor() {
    this.MAX_SIZE = 10;
    this.queueControl = []
  }

isEmpty() {
  if(this.queueControl.length > 0) {
    return false
  } else {return true}

}

canEnqueue() {
return true
}

enqueue(element) {
  

  if (this.queueControl.length === this.MAX_SIZE) {
    return "Queue Overflow"
  } else {this.queueControl.unshift(element);}

  return this.queueControl;

}

dequeue() {

}

}

