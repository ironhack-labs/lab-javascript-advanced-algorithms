class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 5 //this.stackControl.maxLength = 5; me pasa igual, podria funcionar tambien ? es corecto pone 2 iguales ?
  }
    isEmpty() {
        if (this.stackControl == 0) {
          return true
      } else return false
  }

  push(ele) {
      if (this.MAX_SIZE == this.stackControl.length) {
        return "Stack Overflow"
      } else {
        this.stackControl.push(ele);
        return this.stackControl;
      }
  }
    pop() {
        if (this.stackControl == 0) {
            return "Stack Underflow"
        } else {
            this.stackControl.pop;
            return this.stackControl[this.stackControl.length - 1]
        }
  }

    canPush() {
        if (this.stackControl.length < this.MAX_SIZE) {
            return true
        } else {
            return false
        }
            
  }
}
