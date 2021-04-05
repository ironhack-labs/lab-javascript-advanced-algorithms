class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    return this.stackControl.length <= this.MAX_SIZE ? true : false;
  }

  display() {
   
   
  }

  isEmpty() {
    return this.stackControl.length <= 0 ? true : false
  }

  push(item) {
    if(!this.canPush()){
      return "Stack Overflow"
    } else{
    this.stackControl.push(item)
    return this.stackControl
    }
  }

  pop() {
    if(this.isEmpty()){
      return "Stack Underflow"
    } else{
    return this.stackControl.pop()
    }
  }
}
