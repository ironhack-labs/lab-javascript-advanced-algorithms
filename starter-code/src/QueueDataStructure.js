class QueueDataStructure 
{
  constructor()
  {
    this.queueControl = [];
    this.MAX_SIZE = 9;
  }

  isEmpty()
  {
    if (this.queueControl.length === 0) {return true}
    return false;
  }

  canEnqueue()
  {
    if (this.queueControl.length < this.MAX_SIZE) {return true}
    return false;
  }

  enqueue(element)
  {
    if(this.canEnqueue()) {this.queueControl.unshift(element); return this.queueControl}
    else {alert("Queue Overflow"); return "Queue Overflow";}
  }

  dequeue()
  {
    if (!this.isEmpty()) {return this.queueControl.pop()}
    else {alert("Queue Underflow"); return "Queue Underflow";}
  }
}
