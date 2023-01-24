class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    if( this.canPush.length ){

      return true
    }
    else{
      return false
    } 

  }

  isEmpty() {
    // ... your code goes here
    if ( this.isEmpty.length === 1){
      return false

    }
    else {
      return true
    }
  }

  push(item) {
    // ... your code goes here
    if ( this.canPush.length === 0){
      
    }
  }

  pop() {
    // ... your code goes here
  }

  display() {
    // ... your code goes here
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
