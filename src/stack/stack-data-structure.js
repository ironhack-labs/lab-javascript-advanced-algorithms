//Stack with LIFO data structure.
class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    //Should be true if stack is empty. Keep in mind, your Stack is an Array!
    if (this.stackControl.length !== this.MAX_SIZE) return true;
    return false;
  }

  isEmpty() {
    // ... your code goes here
    //If we have any items in the stack, return false - else true if empty
    if (this.stackControl.length !== 0) return false;
    return true;
  }

  push(item) {
    // ... your code goes here
    // can we push new items to the stack?
    if (this.canPush()) {
      this.stackControl.push(item);
      return this.stackControl;
    } else {
      throw new Error("STACK_OVERFLOW");
    }
  }

  pop() {
    // ... your code goes here
    // check if stack has any items before popping them to return.
    if (!this.isEmpty()) {
      return this.stackControl.pop();
    } else {
      throw new Error("STACK_UNDERFLOW");
    }
  }

  display() {
    // ... your code goes here
    return this.stackControl;
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== "undefined") module.exports = Stack;

function eatDinner(callbackArg) {
  console.log("Eating the dinner!");
  callbackArg();
}

function eatDessert() {
  console.log("Eating the dessert!");
}

eatDinner(eatDessert); // <== Eating the dinner!

//for testing
//const stack = new Stack();
//console.log(stack);
//console.log(stack.stackControl.length);
//console.log(stack.canPush());
//console.log(stack.isEmpty());
//console.log(stack.pop());
