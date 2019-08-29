class StackDataStructure {
  constructor(stack) {
    this.stackControl=[];
    this.MAX_SIZE=8;
  }
  
  isEmpty = () => {
    return (this.stackControl.length ==0)? true : false;
  }
  canPush = () => {
    return (this.stackControl.length < this.MAX_SIZE)? true : false;
  }
  push = (element) => {
    if(this.canPush()) {
      this.stackControl.push(element);
      return this.stackControl;
    }
    return 'Stack Overflow';
  }
  pop = () => {
    if (this.isEmpty()) {
      return 'Stack Underflow'
    }
    else {
      let lastElement= this.stackControl.pop();
      return lastElement; 
    }
  }
}

class QueueDataStructure {
  constructor(stack) {
    this.queueControl=[];
    this.MAX_SIZE=8;
  }
  
  isEmpty = () => {
    return (this.queueControl.length ==0)? true : false;
  }
  canEnqueue = () => {
    return (this.queueControl.length < this.MAX_SIZE)? true : false;
  }
  enqueue = (element) => {
    if(this.canEnqueue()) {
      this.queueControl.unshift(element);
      return this.queueControl;
    }
    return 'Queue Overflow';
  }
  dequeue = () => {
    if (this.isEmpty()) {
      return 'Queue Underflow'
    }
    else {
      let lastElement= this.queueControl.pop();
      return lastElement; 
    }
  }
}
