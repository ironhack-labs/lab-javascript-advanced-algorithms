export function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = Number(8);
}

// fucntion to check for empty

StackDataStructure.prototype.isEmpty = function() {
  if (this.stackControl.length == 0) {
    return true;
  } else {
    return false;
  }
};

// function to check if we can push

StackDataStructure.prototype.canPush = function() {
  if (this.stackControl.length < this.MAX_SIZE) {
    return true;
  } else {
    return false;
  }
};

// function to add element

StackDataStructure.prototype.push = function(element) {
  if (this.canPush()) {
    this.stackControl.push(element);
    return this.stackControl;
  } else {
    return "Stack Overflow";
  }
};

// function to remove element lifo style () ==> pop to remove the last added element

StackDataStructure.prototype.pop = function() {
  if (this.stackControl.length <= 0) {
    return "Stack Underflow";
  } else {
    return this.stackControl.pop();
  }
};
