class StackDataStructure {
  constructor () {
    this.stackControl= [];
    this.MAX_SIZE = 72;
  }
  isEmpty () {
    if(this.stackControl.length === 0){
      return true;
    }
    else{
      return false
    }
  }
  canPush () {
    if (this.stackControl.length < this.MAX_SIZE) {
      return true;
    } 
    else {
      return false
    }
  }
  push (string) {
    if(this.canPush()){
      this.stackControl.push(string);
      return this.stackControl;
    }
    else {
      return "Stack Overflow"
    }
  }
  pop () {
    if (!this.isEmpty()){
      return this.stackControl.pop();
    }
    else {
      return "Stack Underflow"
    }
  }
}

