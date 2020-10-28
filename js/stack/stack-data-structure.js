class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
   if (this.stackControl.length < this.MAX_SIZE) { 
   return true;
  } else {
    return false;
   }
  }


  display() {
    // ... your code goes here
  }

  isEmpty() {
    // ... your code goes here
    if (this.stackControl.lenght === 0){ 
    return true;
  }
    return false;
  }
  
  push(item) {
    // ... your code goes here
  }

  pop() {
    // ... your code goes here
  }
  this.stackControl.pop()

}
