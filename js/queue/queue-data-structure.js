class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    for(let el of this.queueControl){
      let li = document.createElement("li");
      li.innerHTML = el;
      queueUL.appendChild(li);
    }
  }

  canEnqueue() {
    if(this.queueControl.length < this.MAX_SIZE){
      return true;
    }else{
      return false;
    }
    
  }

  isEmpty() {
    if(this.queueControl.length === 0){
      return true;
    }
    return false;
  }

  enqueue(item) {
    if(this.canEnqueue()){
      this.queueControl.unshift(item);
      return this.queueControl;
    }else{
      return "Queue Overflow";
    }
  }

  dequeue() {
    if(this.isEmpty()){
      return "Queue Underflow";
    }else{
      return this.queueControl.pop();
    }
  }
}
