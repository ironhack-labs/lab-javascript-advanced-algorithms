class StackDataStructure {
    constructor() {
      this.stackControl = [];
      this.MAX_SIZE = 10;
    }
  
    isEmpty() {
      return this.stackControl.length > 0 ? false : true 
    }
    canPush(element) {
      return this.stackControl.length === this.MAX_SIZE ? false : true;      
    }
    push(element) {
      if (this.stackControl.length === this.MAX_SIZE) {
        return "Stack Overflow" } else {
          this.stackControl.push(element);
        }
      return this.stackControl;
    }
  
    pop() {
      if (this.stackControl.length === 0) {
        return 'Stack Underflow'
      }
      return this.stackControl[this.stackControl.length-1]
    } 
  }