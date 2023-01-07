class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl.length<this.MAX_SIZE){
      return true
    }
    else if (this.stackControl.length>=this.MAX_SIZE){
      return false
    }
    
  }

  isEmpty() {
    if(this.stackControl.length===0){
      return true
    }
    else if (10>=this.stackControl.length>0){
      return false
    }
  }

  push(item) {
    if(this.canPush()===true){
      this.stackControl.push(item)
      return this.stackControl
    }
    
    else if(this.canPush()===false){

      throw new Error('STACK_OVERFLOW')
      
    }
    
  }

  pop(item) {
    if (this.isEmpty()===false){
      return this.stackControl.pop(item)
      
    }
    else if(this.isEmpty()===true){
      throw new Error('STACK_UNDERFLOW')
    }

  }

  display() {
    return this.stackControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;

let stack1 = new Stack ();

stack1.push(5)
stack1.push(5)
stack1.push(5)
stack1.push(5)
stack1.push(5)
stack1.push(5)
stack1.push(5)
stack1.push(5)
stack1.push(5)
stack1.push(5)
stack1.push(5)

console.log(stack1)
console.log(stack1.canPush());
