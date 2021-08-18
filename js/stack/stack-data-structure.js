class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    if (this.stackControl.length < this.MAX_SIZE ){
      return true 
    } else {
      return false
    }
  }

  isEmpty() {
    if (this.stackControl.length == 0){
      return true 

    }else {

      return false
    }
    // ... your code goes here
  }

  push(item) {
    // ... your code goes here
    if (this.canPush()){

      this.stackControl.push(item)
    } else {
      
      throw new Error('STACK_OVERFLOW');
    }
    return this.stackControl
  }

  pop() {
    // ... your code goes here
    let element 

    if (this.isEmpty()){
      
      throw new Error('STACK_UNDERFLOW');
    } else {

      element = this.stackControl.pop();
    }

    return element 
  }

  display() {
    // ... your code goes here
    //for (let i = 0; i < this.stackControl.length; i++){

     // return this.stackControl[i]
   // }

   return this.stackControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
