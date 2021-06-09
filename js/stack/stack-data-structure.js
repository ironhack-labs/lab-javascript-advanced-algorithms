class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    return this.stackControl.length < this.MAX_SIZE
  }

  isEmpty() {
    return this.stackControl.length === 0
  }

  push(item) {
    if( !this.canPush()){
      throw new Error('STACK_OVERFLOW') 
      // return this.stackControl
    }else{
      const height = this.stackControl.length
      this.stackControl[height] = item
    }

    // this.stackControl.push(item)
    return this.stackControl
  }

  pop() {
    if( this.isEmpty() ){
      throw new Error('STACK_UNDERFLOW')
    }
    // const height = this.stackControl.length
    // let temp = this.stackControl[height-1]
    // this.stackControl[height - 1] = null
    // return temp
    return this.stackControl.pop()

  }

  display() {
    return this.stackControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
