class StackDataStructure {
  constructor() {
      this.stackControl = [];
      this.MAX_SIZE = 20;
  }

  isEmpty(){
    if (this.stackControl.length != 0) return false
    else return true;
  }
  canPush(){
    if (this.stackControl.length === this.MAX_SIZE) return false;    
    return true;
  }
  push(x){
    if (!this.canPush()) return "Stack Overflow"
    else {
      this.stackControl.push(x);
      return this.stackControl;
    }

  }
  pop(){
    if (this.isEmpty()) return "Stack Underflow";
    else return this.stackControl.pop();
  }
}

