class StackDataStructure  {
  constructor(stack=[]) {
    this.stackControl = stack;
    this.MAX_SIZE = 10;
  }
  isEmpty() {
    return(this.stackControl.length === 0);
  }
  canPush() {
    return(this.stackControl.length < this.MAX_SIZE);
  }
  push(val) {

    return this.enqueue(val);
  }
  pop() {
    return this.dequeue();
  }
  enqueue(val) {
    if(this.canPush() === true) {
      this.stackControl.push(val);
      return this.stackControl;
    } else {
      return "Stack Overflow" ;
    }
  }
  dequeue() {
    if(this.isEmpty()) {
      return "Stack Underflow";
    } else {
      return this.stackControl.pop();
    }
  }
}
