class QueueDataStructure{
  constructor(){
    this.queueControl = [];
    this.MAX_SIZE = 255;
  }

  isEmpty(){
    return this.queueControl.length === 0;
  }

  canEnqueue(){
    return this.queueControl.length < this.MAX_SIZE;
  }

  enqueue(el){
    if(this.queueControl.length >= this.MAX_SIZE){ return 'Queue Overflow'}
    this.queueControl.unshift(el);
    return this.queueControl;
  }
  
  dequeue(){
    if(this.queueControl.length === 0){ return 'Queue Underflow'}
    this.queueControl.shift();
    return this.queueControl[0];
  }
}
