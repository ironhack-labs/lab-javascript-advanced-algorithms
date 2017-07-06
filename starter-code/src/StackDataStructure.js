function StackDataStructure () {

  // Stack properties
  this.stackControl = [];
  this.MAX_SIZE = 10;

}

/////// Queue methods//////////

// Returns true/false if stack is empty/not empty
StackDataStructure.prototype.isEmpty = function() {
  return this.stackControl.length == 0 ? true : false;
}

// Returns true if stack size is strictly less than stack size
StackDataStructure.prototype.canPush = function() {
  return this.stackControl.length < this.MAX_SIZE ? true : false;
}

// If stack is not full, pushes object argument to top of the stack
StackDataStructure.prototype.push = function(obj) {
  if (this.canPush()) {
    this.stackControl.push(obj);
    return this.stackControl;
  } else {
    return 'Stack Overflow';
  }
}

// If stack is not empty, pops object at the top of the stack and returns it
StackDataStructure.prototype.pop = function() {
  if ( !this.isEmpty() ) {
    return this.stackControl.pop();
  } else {
    return 'Stack Underflow';
  }
}
