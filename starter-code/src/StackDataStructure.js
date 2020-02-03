class StackDataStructure {
  constructor(){
     this.stackControl = []; 
     this.MAX_SIZE = 10;
  }  
  push(value) {
    if (this.canPush()){
        this.stackControl.push(value);
        return this.stackControl;
    } else {
        return "Stack Overflow";
    }
  }
  pop() {
    if (!this.isEmpty()) {
       return this.stackControl.pop();
    } else {
       return "Stack Underflow"; 
    }
  }
  canPush(){
    if (this.stackControl.length === this.MAX_SIZE ) {
        return false;
    } else {
        return true;
    }
  }
  isEmpty() {
    if (this.stackControl.length === 0) {
        return true;
    } else {
        return false;
    }
  }

}