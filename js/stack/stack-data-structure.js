class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl.length < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
  }

  isEmpty() {
    if (this.stackControl.length === 0) {
      return true;
    }
    return false;
  }

  push(item) {
    
      if (this.canPush()) {
        this.stackControl.push(item);
      } else {
        const error = new Error('STACK_OVERFLOW');
        throw error;
      }
	return this.stackControl;
  }

  pop() {
	  if (!this.isEmpty()){
		  return this.stackControl.pop()
	  } 
	  else { 
		const error = new Error('STACK_UNDERFLOW');
	  	throw error;
	  }
	  
  }

  display() {
	  return this.stackControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
