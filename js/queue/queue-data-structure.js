class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    let stringReturn = "";
    let pattern = "<li>-replace-</li>"

    this.queueControl.forEach(elem => {
      stringReturn += pattern.replace("-replace-", elem)
    })

    return stringReturn;
  }

  canEnqueue() {
    return this.queueControl.length < this.MAX_SIZE ? true : false;
  }

  isEmpty() {
    return this.queueControl.length == 0 ? true : false;
  }

  enqueue(item) {
    if(this.canEnqueue())
    {
      this.queueControl.unshift(item)
      return this.queueControl;
    }
    else    
      return "Queue Overflow"    
  }

  dequeue() {
    if(!this.isEmpty())    
    {
      let item = this.queueControl[this.queueControl.length-1]
      this.queueControl.shift()
      return item
    }
    else
      return "Queue Underflow"    
  }
}
