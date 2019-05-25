class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 5;
  }

  isEmpty(){
    return (this.queueControl.length === 0);
  }

  canEnqueue(){
    return (this.queueControl.length < this.MAX_SIZE);
  }

  enqueue(element){
    if(!this.canEnqueue()){return 'Queue Overflow';}
    this.queueControl.unshift(element);

    return this.queueControl;
  }

  dequeue(){
    if(this.isEmpty()) return 'Queue Underflow';
    return this.queueControl[this.queueControl.length-1];
  }
}

