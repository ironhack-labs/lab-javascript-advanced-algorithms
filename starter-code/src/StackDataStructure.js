class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }
  isEmpty() {
    if (this.stackControl.length === 0) {
      return true;
    } else {
      return false;
    };
  }
  canPush() {
    if (this.stackControl.length === this.MAX_SIZE) {
      return false;
    } else {
      return true;
    };
  }
  push(item) {
    let index = this.stackControl.length;
    if (this.stackControl.length >= this.MAX_SIZE) {
      return 'Stack Overflow';
    } else {
      this.stackControl[index] = item;
      return this.stackControl;
    };
  }
  pop() {
    let index = this.stackControl.length - 1;
    if (this.stackControl.length === 0) {
      return 'Stack Underflow';
    }
    return this.stackControl[index];
  }
};

/**********************************/
/*           VALIDATION           */
/**********************************/

// stack = new StackDataStructure();

// console.log(stack);

// console.log(stack.stackControl);

// console.log(stack.isEmpty());

// console.log(stack.canPush());

// console.log(stack.push(1));
// console.log(stack.push(2));
// console.log(stack.push(3));
// console.log(stack.push(4));
// console.log(stack.push(5));
// console.log(stack.push(6));
// console.log(stack.push(7));
// console.log(stack.push(8));
// console.log(stack.push(9));

// console.log(stack.canPush());

// console.log(stack.push(10));

// console.log(stack.canPush());

// console.log(stack.push(11));

// console.log(stack.canPush());

// console.log(stack.pop());