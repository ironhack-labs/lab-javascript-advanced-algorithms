class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl.length<this.MAX_SIZE){
      return true
    }

    if (this.stackControl.length===this.MAX_SIZE){
      return false
    }
  }

  isEmpty() {
    if (this.stackControl.length===0){
      return true
    }
    return false
  }

  push(item) {
    if (this.canPush()===true){
      this.stackControl.push(item)
      return this.stackControl
    }
    if(this.canPush()===false){
      throw new Error('STACK_OVERFLOW')
    }
  }

  pop() {
    if (this.isEmpty()===false){
      return this.stackControl.pop()
    }
    if(this.isEmpty()===true){
      throw new Error('STACK_UNDERFLOW')
  }
  }
  display() {
    let arrayDisplay = []
    for (let i=0; i<this.stackControl.length; i++){
      arrayDisplay.push(this.stackControl[i])
    }
    return arrayDisplay
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
